import { ProfitabilityAlertResponse } from 'services/api/types/responses';

import { setCloseVolumeAlert, setProfitabilityAlert } from './actions';

export type UuidDashboardActions =
  | ReturnType<typeof setProfitabilityAlert>
  | ReturnType<typeof setCloseVolumeAlert>;

export type Metrics = {
  metrics: ProfitabilityAlertResponse | null;
};
