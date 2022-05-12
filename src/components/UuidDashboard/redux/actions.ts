import { createAction } from '@reduxjs/toolkit';
import {
  CloseVolumeAlertResponse,
  ProfitabilityAlertResponse,
} from 'services/api/types/responses';

const SET_PROFITABILITY_ALERT = 'UUID_DASHBOARD/SET_PROFITABILITY_ALERT';
const SET_CLOSE_VOLUME = 'UUID_DASHBOARD/SET_CLOSE_VOLUME';

export const setProfitabilityAlert = createAction<
  ProfitabilityAlertResponse,
  typeof SET_PROFITABILITY_ALERT
>(SET_PROFITABILITY_ALERT);

export const setCloseVolumeAlert = createAction<
  CloseVolumeAlertResponse,
  typeof SET_CLOSE_VOLUME
>(SET_CLOSE_VOLUME);
