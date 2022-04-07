export type Manipulator = {
  sensors: Record<Sensors, boolean>;
  datePeriod: DatePeriod;
  average: number;
  timeInterval?: string;
};

export type DatePeriod = {
  from: string | null;
  to: string | null;
};

export type Sensors = 'profitability' | 'closeVolume';
