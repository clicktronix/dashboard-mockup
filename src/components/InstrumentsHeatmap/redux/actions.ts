import { createAction } from '@reduxjs/toolkit';

export const setInstrument = createAction<string, 'SET_INSTRUMENT'>('SET_INSTRUMENT');
