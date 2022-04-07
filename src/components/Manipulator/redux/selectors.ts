import { RootState } from 'core/store';

export const manipulatorSelect = (state: RootState) => state.manipulator;
export const sensorSelect = (state: RootState) => state.manipulator.sensors;
export const averageSelect = (state: RootState) => state.manipulator.average;
export const datePeriodSelect = (state: RootState) => state.manipulator.datePeriod;
