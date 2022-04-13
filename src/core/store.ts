import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dashboardReducer } from 'components/Dashboard/redux';
import { heatmapReducer } from 'components/InstrumentsHeatmap/redux';
import { manipulatorReducer } from 'components/Manipulator/redux';
import { metricsReducer } from 'components/MetricsDashboard/redux';
import { commonApi } from 'services/api/common';

const rootReducer = combineReducers({
  [commonApi.reducerPath]: commonApi.reducer,
  manipulator: manipulatorReducer,
  metrics: metricsReducer,
  heatmap: heatmapReducer,
  dashboard: dashboardReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
