import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ChapterPage from './ChapterPage';
import { renderWithProviders } from '../test/test-utils';

// Mock ResizableSandbox to avoid issues with react-resizable-panels in JSDOM
vi.mock('../components/ResizableSandbox', () => ({
  default: ({ code, Component }) => (
    <div data-testid="mock-sandbox">
      {code && <pre>{code}</pre>}
      {Component && <Component />}
    </div>
  ),
}));

describe('ChapterPage Integration', () => {
  beforeEach(() => {
    // Mock window.scrollTo since it's used in useEffect
    window.scrollTo = vi.fn();
  });

  it('renders chapter content for a valid chapterId', () => {
    renderWithProviders(<ChapterPage />, {
      route: '/chapters/what-is-react',
      path: '/chapters/:chapterId',
    });

    expect(screen.getByText(/What is React\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Foundational concepts and the React mental model/i)).toBeInTheDocument();
  });

  it('toggles mastery status when "Complete Topic" is clicked', () => {
    const { store } = renderWithProviders(<ChapterPage />, {
      route: '/chapters/what-is-react',
      path: '/chapters/:chapterId',
    });

    const completeButton = screen.getByRole('button', { name: /Complete Topic/i });
    fireEvent.click(completeButton);

    // After click, button should change text
    expect(screen.getByText(/Mastery Achieved/i)).toBeInTheDocument();

    // Verify state update
    expect(store.getState().progress.completedChapters).toContain('what-is-react');
  });

  it('navigates to the next chapter when "Next" is clicked', () => {
    renderWithProviders(<ChapterPage />, {
      route: '/chapters/what-is-react',
      path: '/chapters/:chapterId',
    });

    // Next chapter after what-is-react is react-setup
    const nextLink = screen.getByRole('link', { name: /Environment Setup/i });
    expect(nextLink).toBeInTheDocument();
    expect(nextLink).toHaveAttribute('href', '/chapters/react-setup');
  });

  it('renders the sandbox if code or component is present', () => {
    renderWithProviders(<ChapterPage />, {
      route: '/chapters/what-is-react',
      path: '/chapters/:chapterId',
    });

    // what-is-react has CounterExample
    expect(screen.getByTestId('mock-sandbox')).toBeInTheDocument();
  });

  it('redirects to home for an invalid chapterId', () => {
    renderWithProviders(<ChapterPage />, {
      route: '/chapters/invalid-id',
      path: '/chapters/:chapterId',
    });

    const title = screen.queryByText(/Topic/i);
    expect(title).not.toBeInTheDocument();
  });
});
