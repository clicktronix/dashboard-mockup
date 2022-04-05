export type Manipulator = {
  sensors: Record<Sensors, boolean>;
  datePeriod: DatePeriod;
  average: number;
  timeInterval?: string;
};

export type DatePeriod = {
  from?: string;
  to?: string;
};

export type Sensors = 'profitability' | 'closeVolume';
