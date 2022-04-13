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
