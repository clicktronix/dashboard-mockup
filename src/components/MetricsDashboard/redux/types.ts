import { Trade } from 'services/api/types/responses';

export type Metrics = {
  metrics: Metric | null;
};

export type Metric = {
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
