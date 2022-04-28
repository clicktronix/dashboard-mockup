import { WithLimit, WithPeriod, WithSymbol } from './params';

export type InstrumentRequest = WithSymbol & WithLimit & WithPeriod;
