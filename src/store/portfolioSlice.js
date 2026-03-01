import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    likeCount: 0,
    hasLiked: false,
  },
  reducers: {
    incrementLike: (state) => {
      if (!state.hasLiked) {
        state.likeCount += 1;
        state.hasLiked = true;
      }
    },
    hydrateLikeState: (state, action) => {
      const { likeCount = 0, hasLiked = false } = action.payload || {};
      state.likeCount = likeCount;
      state.hasLiked = hasLiked;
    },
  },
});

export const { incrementLike, hydrateLikeState } = portfolioSlice.actions;
export default portfolioSlice.reducer;
