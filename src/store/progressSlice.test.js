import { describe, it, expect, beforeEach, vi } from 'vitest';
import progressReducer, { toggleChapterCompletion, markChapterComplete } from './progressSlice';

describe('progressSlice reducer', () => {
  const initialState = {
    completedChapters: [],
  };

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should handle initial state', () => {
    expect(progressReducer(undefined, { type: 'unknown' })).toEqual({
      completedChapters: [],
    });
  });

  it('should toggle chapter completion from incomplete to complete', () => {
    const actual = progressReducer(initialState, toggleChapterCompletion('chapter-1'));
    expect(actual.completedChapters).toContain('chapter-1');
    expect(JSON.parse(localStorage.getItem('react_mastery_progress'))).toContain('chapter-1');
  });

  it('should toggle chapter completion from complete to incomplete', () => {
    const stateWithCompletion = { completedChapters: ['chapter-1'] };
    const actual = progressReducer(stateWithCompletion, toggleChapterCompletion('chapter-1'));
    expect(actual.completedChapters).not.toContain('chapter-1');
    expect(JSON.parse(localStorage.getItem('react_mastery_progress'))).not.toContain('chapter-1');
  });

  it('should mark chapter as complete', () => {
    const actual = progressReducer(initialState, markChapterComplete('chapter-2'));
    expect(actual.completedChapters).toContain('chapter-2');
  });

  it('should not add duplicate chapters when marking complete', () => {
    const stateWithCompletion = { completedChapters: ['chapter-2'] };
    const actual = progressReducer(stateWithCompletion, markChapterComplete('chapter-2'));
    expect(actual.completedChapters).toHaveLength(1);
  });
});
