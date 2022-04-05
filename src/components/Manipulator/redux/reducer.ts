import { createReducer } from '@reduxjs/toolkit';

import { setAverage, setPeriod, setSensor } from './actions';
import { Manipulator } from './types';

const initialState: Manipulator = {
  sensors: {
    profitability: true,
    closeVolume: true,
  },
  datePeriod: {
    from: undefined,
    to: undefined,
  },
  average: 5,
  timeInterval: undefined,
};

export const manipulatorReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setSensor, (state, action) => {
      state.sensors[action.payload] = !state.sensors[action.payload];
    })
    .addCase(setAverage, (state, action) => {
      state.average = action.payload;
    })
    .addCase(setPeriod, (state, action) => {
      state.datePeriod = action.payload;
    }),
);
