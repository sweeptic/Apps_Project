import { createSlice } from '@reduxjs/toolkit';

export interface LoaderState {
  show: boolean;
}

export interface CommonState {
  loader: LoaderState;
}

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    loader: {
      show: false,
    },
  } as CommonState,
  reducers: {
    showLoader: (state) => {
      state.loader.show = true;
    },
    hideLoader: (state) => {
      state.loader.show = false;
    },
  },
});

const { actions } = commonSlice;

export const commonReducer = commonSlice.reducer;

export const { showLoader, hideLoader } = actions;

export const selectLoaderState = (state: ApplicationState) => {
  return state.common.loader;
};
