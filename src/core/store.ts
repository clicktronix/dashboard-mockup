import { combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { DashboardActions, dashboardReducer } from 'components/Dashboard/redux';
import { HeatmapActions, heatmapReducer } from 'components/InstrumentsHeatmap/redux';
import { ManipulatorActions, manipulatorReducer } from 'components/Manipulator/redux';
import {
  UuidDashboardActions,
  uuidDashboardReducer,
} from 'components/UuidDashboard/redux';
import { useDispatch } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { commonApi } from 'services/api/common';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['uuidDashboard', 'dashboard', 'heatmap', 'api'],
};

const rootReducer = combineReducers({
  [commonApi.reducerPath]: commonApi.reducer,
  manipulator: manipulatorReducer,
  uuidDashboard: uuidDashboardReducer,
  heatmap: heatmapReducer,
  dashboard: dashboardReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(commonApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type Actions =
  | UuidDashboardActions
  | ManipulatorActions
  | HeatmapActions
  | DashboardActions;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Actions
>;

export const useAppDispatch = () => useDispatch<AppThunk>();
