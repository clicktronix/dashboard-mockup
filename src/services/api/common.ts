import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { setCloseVolumeAlerts, setProfitabilityAlerts } from 'components/Dashboard/redux';
import { CONFIG } from 'core/config';

import { CloseVolumeAlertsResponse, ProfitabilityAlertsResponse } from './types/alerts';

export const commonApi = createApi({
  reducerPath: 'api',
  tagTypes: ['Alerts'],
  baseQuery: fetchBaseQuery({
    baseUrl: CONFIG.baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json;charset=UTF-8');

      return headers;
    },
  }),
  endpoints: (build) => ({
    fetchProfitabilityAlerts: build.query<ProfitabilityAlertsResponse, void>({
      query: () => ({
        url: '/v1/sensors/profitability/alerts',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setProfitabilityAlerts(result.data.data));
        } catch (e) {
          console.error('fetchEntity error', e);
        }
      },
    }),
    fetchCloseVolumeAlerts: build.query<CloseVolumeAlertsResponse, void>({
      query: () => ({
        url: '/v1/sensors/close_volume/alerts',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setCloseVolumeAlerts(result.data.data));
        } catch (e) {
          console.error('fetchEntity error', e);
        }
      },
    }),
  }),
});

export const { useFetchCloseVolumeAlertsQuery, useFetchProfitabilityAlertsQuery } =
  commonApi;
