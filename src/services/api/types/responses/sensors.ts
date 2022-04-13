export type ProfitabilityResponse = {
  code: number;
  data: ProfitabilityAlertResponse[];
};

export type CloseVolumeResponse = {
  code: number;
  data: CloseVolumeAlertResponse[];
};

export type ProfitabilityAlertResponse = {
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

export type CloseVolumeAlertResponse = {
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
