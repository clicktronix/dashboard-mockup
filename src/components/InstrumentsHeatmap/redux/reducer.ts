import { createReducer } from '@reduxjs/toolkit';

import { setInstrument } from './actions';
import { Heatmap } from './types';

const initialState: Heatmap = {
  selectedInstruments: [],
};

export const heatmapReducer = createReducer(initialState, (builder) =>
  builder.addCase(setInstrument, (state, action) => {
    state.selectedInstruments.push(action.payload);
  }),
);
