import { RootState } from 'core/store';
import { d } from 'utils/dateTime';

export const manipulatorSelect = (state: RootState) => state.manipulator;
export const sensorsSelect = (state: RootState) => state.manipulator.sensors;
export const averageSelect = (state: RootState) => state.manipulator.average;
export const limitSelect = (state: RootState) => state.manipulator.limit;
export const datePeriodSelect = (state: RootState) => state.manipulator.datePeriod;
export const datePeriodParamsSelect = (state: RootState) => {
  const { from, to } = state.manipulator.datePeriod;
  if (!d(from).isValid() || !d(to).isValid()) {
    return '';
  }
  const params = {
    from: d(from).utc().unix().toString(),
    to: d(to).utc().unix().toString(),
  };
  return `${new URLSearchParams(params).toString()}`;
};
