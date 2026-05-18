import { createSlice } from '@reduxjs/toolkit';

const loadProgress = () => {
  try {
    const serializedState = localStorage.getItem('react_mastery_progress');
    if (serializedState === null) return [];
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveProgress = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('react_mastery_progress', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const initialState = {
  completedChapters: loadProgress(),
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    toggleChapterCompletion: (state, action) => {
      const chapterId = action.payload;
      if (state.completedChapters.includes(chapterId)) {
        state.completedChapters = state.completedChapters.filter(id => id !== chapterId);
      } else {
        state.completedChapters.push(chapterId);
      }
      saveProgress(state.completedChapters);
    },
    markChapterComplete: (state, action) => {
      const chapterId = action.payload;
      if (!state.completedChapters.includes(chapterId)) {
        state.completedChapters.push(chapterId);
      }
      saveProgress(state.completedChapters);
    },
  },
});

export const { toggleChapterCompletion, markChapterComplete } = progressSlice.actions;
export default progressSlice.reducer;
