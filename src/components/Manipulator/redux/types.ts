import {
  clearFromPeriod,
  clearToPeriod,
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
  | ReturnType<typeof clearFromPeriod>;

export type Manipulator = {
  sensors: Record<Sensor, boolean>;
  datePeriod: DatePeriod;
  limit: number;
  average: number;
  timeInterval?: string;
};

export type DatePeriod = {
  from: string;
  to: string;
};

export type Sensor = 'profitability' | 'closeVolume';
