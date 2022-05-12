import { createReducer } from '@reduxjs/toolkit';
import { d } from 'utils/dateTime';

import {
  clearFromPeriod,
  clearToPeriod,
  resetManipulator,
  setAverage,
  setLimit,
  setPeriod,
  setSensor,
} from './actions';
import { Manipulator } from './types';

export const initialDisabledSensors = {
  profitability: false,
  closeVolume: false,
};

const initialState: Manipulator = {
  sensors: {
    profitability: true,
    closeVolume: true,
  },
  datePeriod: {
    from: d().startOf('D').format(),
    to: d().format(),
  },
  limit: 50,
  average: 5,
  timeInterval: undefined,
};

export const manipulatorReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(setSensor, (state, action) => {
      state.sensors = action.payload;
    })
    .addCase(setAverage, (state, action) => {
      state.average = action.payload;
    })
    .addCase(setLimit, (state, action) => {
      state.limit = action.payload;
    })
    .addCase(setPeriod, (state, action) => {
      state.datePeriod = action.payload;
    })
    .addCase(clearToPeriod, (state) => {
      state.datePeriod.to = initialState.datePeriod.to;
    })
    .addCase(clearFromPeriod, (state) => {
      state.datePeriod.from = initialState.datePeriod.from;
    })
    .addCase(resetManipulator, () => initialState),
);
