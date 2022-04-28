import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { setCloseVolumeAlerts, setProfitabilityAlerts } from 'components/Dashboard/redux';
import { setMetrics } from 'components/UuidDashboard/redux';
import { CONFIG } from 'core/config';

import { AlertsRequest } from './types/requests';
import { InstrumentRequest } from './types/requests/instruments';
import {
  CloseVolumeAlertResponse,
  CloseVolumeResponse,
  MetricResponse,
  MetricsResponse,
  ProfitabilityAlertResponse,
  ProfitabilityResponse,
} from './types/responses';

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
    getProfitability: build.query<ProfitabilityAlertResponse[], AlertsRequest>({
      query: ({ limit, period }) => ({
        url: `/v1/sensors/profitability/alerts?limit=${limit}&${period}`,
      }),
      transformResponse: (res: ProfitabilityResponse) => res.data,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setProfitabilityAlerts(result.data));
        } catch (e) {
          console.error('fetchEntity error', e);
        }
      },
    }),
    getCloseVolume: build.query<CloseVolumeAlertResponse[], AlertsRequest>({
      query: ({ limit, period }) => ({
        url: `/v1/sensors/close_volume/alerts?limit=${limit}&${period}`,
      }),
      transformResponse: (res: CloseVolumeResponse) => res.data,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setCloseVolumeAlerts(result.data));
        } catch (e) {
          console.error('fetchEntity error', e);
        }
      },
    }),
    getProfitabilityById: build.query<MetricResponse, string>({
      query: (id) => ({
        url: `/v1/sensors/profitability/alert/${id}`,
      }),
      transformResponse: (res: MetricsResponse) => res.data,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setMetrics(result.data));
        } catch (e) {
          console.error('fetchEntity error', e);
        }
      },
    }),
    getCloseVolumeById: build.query<MetricResponse, string>({
      query: (id) => ({
        url: `/v1/sensors/close_volume/alert/${id}`,
      }),
      transformResponse: (res: MetricsResponse) => res.data,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setMetrics(result.data));
        } catch (e) {
          console.error('fetchEntity error', e);
        }
      },
    }),
    getCloseVolumeInstrument: build.query<CloseVolumeAlertResponse[], InstrumentRequest>({
      query: ({ limit, symbol, period }) => ({
        url: `/v1/sensors/close_volume/alerts?limit=${limit}&symbol=${symbol}&${period}`,
      }),
      transformResponse: (res: CloseVolumeResponse) => res.data,
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (e) {
          console.error('fetchEntity error', e);
        }
      },
    }),
  }),
});

export const {
  useGetCloseVolumeQuery,
  useGetProfitabilityQuery,
  useGetProfitabilityByIdQuery,
  useGetCloseVolumeByIdQuery,
  useLazyGetCloseVolumeByIdQuery,
  useLazyGetProfitabilityByIdQuery,
  useLazyGetCloseVolumeInstrumentQuery,
} = commonApi;
