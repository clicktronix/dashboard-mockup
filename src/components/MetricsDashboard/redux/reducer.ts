import { createReducer } from '@reduxjs/toolkit';

import { setMetrics } from './actions';
import { Metrics } from './types';

const initialState: Metrics = {
  metrics: null,
};

export const metricsReducer = createReducer(initialState, (builder) =>
  builder.addCase(setMetrics, (state, action) => {
    state.metrics = action.payload;
  }),
);
