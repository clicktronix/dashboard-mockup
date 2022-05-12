import {
  CloseVolumeAlertResponse,
  ProfitabilityAlertResponse,
} from 'services/api/types/responses';

import { setCloseVolumeAlerts, setProfitabilityAlerts } from './actions';

export type DashboardActions =
  | ReturnType<typeof setProfitabilityAlerts>
  | ReturnType<typeof setCloseVolumeAlerts>;

export type Dashboard = {
  profitabilityAlerts: ProfitabilityAlertResponse[];
  closeVolumeAlerts: CloseVolumeAlertResponse[];
};
