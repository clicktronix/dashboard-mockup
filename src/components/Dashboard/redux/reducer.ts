import { createReducer } from '@reduxjs/toolkit';

import { setCloseVolumeAlerts, setProfitabilityAlerts } from './actions';
import { Dashboard } from './types';

const initialState: Dashboard = {
  profitabilityAlerts: [],
  closeVolumeAlerts: [],
};

export const dashboardReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setCloseVolumeAlerts, (state, action) => {
      state.closeVolumeAlerts = state.closeVolumeAlerts.concat(action.payload);
    })
    .addCase(setProfitabilityAlerts, (state, action) => {
      state.profitabilityAlerts = state.profitabilityAlerts.concat(action.payload);
    }),
);
