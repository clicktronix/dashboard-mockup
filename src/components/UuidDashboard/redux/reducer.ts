import { createReducer } from '@reduxjs/toolkit';

import { setProfitabilityAlert } from './actions';
import { Metrics } from './types';

const initialState: Metrics = {
  metrics: null,
};

export const uuidDashboardReducer = createReducer(initialState, (builder) =>
  builder.addCase(setProfitabilityAlert, (state, action) => {
    state.metrics = action.payload;
  }),
);
