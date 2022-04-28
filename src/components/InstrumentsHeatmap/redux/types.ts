import { setInstrument } from './actions';

export type HeatmapActions = ReturnType<typeof setInstrument>;

export type Heatmap = {
  selectedInstruments: string[];
};
