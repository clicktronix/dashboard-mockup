import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const d = dayjs;
export type Date = dayjs.Dayjs;
