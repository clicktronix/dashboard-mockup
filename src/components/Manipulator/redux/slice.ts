import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Manipulator, Sensors } from './types';

const initialState: Manipulator = {
  sensors: {
    profitability: false,
    closeVolume: false,
  },
  datePeriod: {
    from: undefined,
    to: undefined,
  },
  timeInterval: undefined,
};

export const manipulatorSlice = createSlice({
  name: 'manipulator',
  initialState,
  reducers: {
    setSensor: (state, action: PayloadAction<Sensors>) => {
      state.sensors[action.payload] = !state.sensors[action.payload];
    },
    setPeriod: (state, action: PayloadAction<typeof initialState.datePeriod>) => {
      state.datePeriod = action.payload;
    },
  },
});

export const { setSensor, setPeriod } = manipulatorSlice.actions;

export const manipulatorReducer = manipulatorSlice.reducer;
