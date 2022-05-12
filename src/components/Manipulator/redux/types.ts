import {
  clearFromPeriod,
  clearToPeriod,
  resetManipulator,
  setAverage,
  setLimit,
  setPeriod,
  setSensor,
} from './actions';

export type ManipulatorActions =
  | ReturnType<typeof setSensor>
  | ReturnType<typeof setAverage>
  | ReturnType<typeof setPeriod>
  | ReturnType<typeof setLimit>
  | ReturnType<typeof clearToPeriod>
  | ReturnType<typeof clearFromPeriod>
  | ReturnType<typeof resetManipulator>;

export type Manipulator = {
  sensors: Record<string, boolean>;
  datePeriod: DatePeriod;
  limit: number;
  average: number;
  timeInterval?: string;
};

export type DatePeriod = {
  from: string;
  to: string;
};
