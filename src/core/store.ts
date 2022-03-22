import { configureStore } from '@reduxjs/toolkit';
import { heatmapReducer } from 'components/InstrumentsHeatmap/redux';
import { manipulatorReducer } from 'components/Manipulator/redux';

export const store = configureStore({
  reducer: {
    manipulator: manipulatorReducer,
    heatmap: heatmapReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
