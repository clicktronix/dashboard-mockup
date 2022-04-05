import { createAction } from '@reduxjs/toolkit';

import { DatePeriod, Sensors } from './types';

const SET_SENSOR = 'SET_SENSOR';
const SET_AVERAGE = 'SET_AVERAGE';
const SET_PERIOD = 'SET_PERIOD';

export const setSensor = createAction<Sensors, typeof SET_SENSOR>(SET_SENSOR);
export const setAverage = createAction<number, typeof SET_AVERAGE>(SET_AVERAGE);
export const setPeriod = createAction<DatePeriod, typeof SET_PERIOD>(SET_PERIOD);
