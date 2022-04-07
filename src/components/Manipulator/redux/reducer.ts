import { createReducer } from '@reduxjs/toolkit';

import {
  clearFromPeriod,
  clearToPeriod,
  setAverage,
  setPeriod,
  setSensor,
} from './actions';
import { Manipulator } from './types';

const initialState: Manipulator = {
  sensors: {
    profitability: true,
    closeVolume: true,
  },
  datePeriod: {
    from: null,
    to: null,
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
    })
    .addCase(clearToPeriod, (state) => {
      state.datePeriod.to = initialState.datePeriod.to;
    })
    .addCase(clearFromPeriod, (state) => {
      state.datePeriod.from = initialState.datePeriod.from;
    }),
);
