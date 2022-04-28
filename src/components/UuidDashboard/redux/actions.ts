import { createAction } from '@reduxjs/toolkit';

import { Metric } from './types';

const SET_METRICS = 'UUID_DASHBOARD/SET_METRICS';

export const setMetrics = createAction<Metric, typeof SET_METRICS>(SET_METRICS);
