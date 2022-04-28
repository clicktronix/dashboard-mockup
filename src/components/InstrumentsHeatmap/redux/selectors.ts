import { RootState } from 'core/store';

export const selectedInstrumentsSelect = (state: RootState) =>
  state.heatmap.selectedInstruments;
