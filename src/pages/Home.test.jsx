import React from 'react';
import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './Home';
import { renderWithProviders } from '../test/test-utils';

describe('Home Page Integration', () => {
  it('renders the hero section with the correct title', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(/Master React/i)).toBeInTheDocument();
    expect(screen.getByText(/Without Compromise/i)).toBeInTheDocument();
  });

  it('renders curriculum phases from chapterData', () => {
    renderWithProviders(<Home />);
    // Check if the first phase title is present
    expect(screen.getByText(/Phase 1 — Introduction & Setup/i)).toBeInTheDocument();
    // Check if the second phase title is present
    expect(screen.getByText(/Phase 2 — React Fundamentals/i)).toBeInTheDocument();
  });

  it('reflects completed chapters progress', () => {
    const preloadedState = {
      progress: {
        completedChapters: ['what-is-react'],
      },
    };
    renderWithProviders(<Home />, { preloadedState });

    // In Home.jsx, it shows "1 Completed" for Phase 1 if 'what-is-react' is in completedChapters
    // The text is "1 Topics • 1 Completed"
    expect(screen.getByText(/1 Completed/i)).toBeInTheDocument();
    // Check for the checkmark
    expect(screen.getByText('✓')).toBeInTheDocument();
  });

  it('shows "Start Learning" button that links to the first chapter', () => {
    renderWithProviders(<Home />);
    const startButton = screen.getByRole('link', { name: /Start Learning/i });
    expect(startButton).toBeInTheDocument();
    expect(startButton).toHaveAttribute('href', '/chapters/what-is-react');
  });
});
