import { WithId, WithLimit, WithPeriod } from './params';

export type InstrumentRequest = WithId & WithLimit & WithPeriod;
