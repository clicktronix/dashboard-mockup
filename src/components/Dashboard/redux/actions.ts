import { createAction } from '@reduxjs/toolkit';
import {
  CloseVolumeAlertResponse,
  ProfitabilityAlertResponse,
} from 'services/api/types/responses';

const SET_PROFITABILITY_ALERTS = 'DASHBOARD/SET_PROFITABILITY_ALERTS';
const SET_CLOSE_VOLUME_ALERTS = 'DASHBOARD/SET_CLOSE_VOLUME_ALERTS';

export const setProfitabilityAlerts = createAction<
  ProfitabilityAlertResponse[],
  typeof SET_PROFITABILITY_ALERTS
>(SET_PROFITABILITY_ALERTS);
export const setCloseVolumeAlerts = createAction<
  CloseVolumeAlertResponse[],
  typeof SET_CLOSE_VOLUME_ALERTS
>(SET_CLOSE_VOLUME_ALERTS);
