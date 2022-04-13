import { Trade } from './trades';

export type MetricsResponse = {
  code: number;
  data: MetricResponse;
};

export type MetricResponse = {
  comment: string;
  config: Record<string, string | number> | null;
  description: string;
  fromTime: string;
  fullProfitValue: number;
  id: string;
  profitabilityValue: number;
  timeEmitted: string;
  toTime: string;
  totalAggProfit: number;
  trades: Trade[];
  tradesCount: number;
  userUUID: string;
};
