import { createAction } from '@reduxjs/toolkit';

const SET_INSTRUMENT = 'SET_INSTRUMENT';

export const setInstrument = createAction<string[], typeof SET_INSTRUMENT>(
  SET_INSTRUMENT,
);
