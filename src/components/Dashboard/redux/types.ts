export type Dashboard = {
  profitabilityAlerts: ProfitabilityAlert[];
  closeVolumeAlerts: CloseVolumeAlert[];
};

export type ProfitabilityAlert = {
  comment: string;
  config: Record<string, string> | null;
  description: string;
  fromTime: string;
  fullProfitValue: number;
  id: string;
  profitabilityValue: string;
  timeEmitted: string;
  toTime: string;
  totalAggProfit: number;
  trades: Record<string, string> | null;
  tradesCount: number;
  userUUID: number;
};

export type CloseVolumeAlert = {
  comment: string;
  description: string;
  fromTime: string;
  id: string;
  sumLotsValue: number;
  symbol: string;
  timeEmitted: string;
  toTime: string;
  tradesCount: number;
  typeOperation: string;
};
