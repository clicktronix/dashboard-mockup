import { createAction } from '@reduxjs/toolkit';

import { DatePeriod, Sensors } from './types';

const SET_SENSOR = 'SET_SENSOR';
const SET_AVERAGE = 'SET_AVERAGE';
const SET_PERIOD = 'SET_PERIOD';
const CLEAR_TO_PERIOD = 'CLEAR_TO_PERIOD';
const CLEAR_FROM_PERIOD = 'CLEAR_FROM_PERIOD';

export const setSensor = createAction<Sensors, typeof SET_SENSOR>(SET_SENSOR);
export const setAverage = createAction<number, typeof SET_AVERAGE>(SET_AVERAGE);
export const setPeriod = createAction<DatePeriod, typeof SET_PERIOD>(SET_PERIOD);
export const clearToPeriod = createAction(CLEAR_TO_PERIOD);
export const clearFromPeriod = createAction(CLEAR_FROM_PERIOD);
