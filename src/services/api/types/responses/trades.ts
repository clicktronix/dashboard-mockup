export type Trade = {
  enrichment: Record<string, string | number | object>;
  imported: string;
  login: number;
  mt4: MetaTrader | null;
  mt5: MetaTrader | null;
  server: string;
  symbol: string;
  timestamp: number;
  uniqId: UniqId;
};

export type MetaTrader = {
  action: number;
  comment: string;
  commission: number;
  deal: number;
  entry: number;
  login: number;
  positionId: number;
  price: number;
  profit: number;
  storage: number;
  symbol: string;
  time: number;
  volume: number;
};

export type UniqId = {
  login: number;
  id: number;
  mt4Opening: boolean;
};
