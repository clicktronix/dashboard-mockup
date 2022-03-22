export type Manipulator = {
  sensors: Record<Sensors, boolean>;
  datePeriod: {
    from?: string;
    to?: string;
  };
  timeInterval?: string;
};

export type Sensors = 'profitability' | 'closeVolume';
