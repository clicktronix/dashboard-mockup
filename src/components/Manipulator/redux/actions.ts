import { createAction } from '@reduxjs/toolkit';

import { DatePeriod, Sensor } from './types';

const SET_SENSOR = 'MANIPULATOR/SET_SENSOR';
const SET_AVERAGE = 'MANIPULATOR/SET_AVERAGE';
const SET_PERIOD = 'MANIPULATOR/SET_PERIOD';
const SET_LIMIT = 'MANIPULATOR/SET_LIMIT';
const CLEAR_TO_PERIOD = 'MANIPULATOR/CLEAR_TO_PERIOD';
const CLEAR_FROM_PERIOD = 'MANIPULATOR/CLEAR_FROM_PERIOD';
const RESET_MANIPULATOR = 'MANIPULATOR/RESET_MANIPULATOR';

export const setSensor = createAction<Sensor, typeof SET_SENSOR>(SET_SENSOR);
export const setAverage = createAction<number, typeof SET_AVERAGE>(SET_AVERAGE);
export const setPeriod = createAction<DatePeriod, typeof SET_PERIOD>(SET_PERIOD);
export const setLimit = createAction<number, typeof SET_LIMIT>(SET_LIMIT);
export const clearToPeriod = createAction(CLEAR_TO_PERIOD);
export const clearFromPeriod = createAction(CLEAR_FROM_PERIOD);
export const resetManipulator = createAction(RESET_MANIPULATOR);
