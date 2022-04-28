import { createAction } from '@reduxjs/toolkit';

import { CloseVolumeAlert, ProfitabilityAlert } from './types';

const SET_PROFITABILITY_ALERTS = 'DASHBOARD/SET_PROFITABILITY_ALERTS';
const SET_CLOSE_VOLUME_ALERTS = 'DASHBOARD/SET_CLOSE_VOLUME_ALERTS';

export const setProfitabilityAlerts = createAction<
  ProfitabilityAlert[],
  typeof SET_PROFITABILITY_ALERTS
>(SET_PROFITABILITY_ALERTS);
export const setCloseVolumeAlerts = createAction<
  CloseVolumeAlert[],
  typeof SET_CLOSE_VOLUME_ALERTS
>(SET_CLOSE_VOLUME_ALERTS);
