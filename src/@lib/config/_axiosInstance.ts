import { ENV } from '.environments';
import { IBaseResponse } from '@lib/interfaces';
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const AxiosInstance = axios.create({
  baseURL: ENV.apiUrl,
});

AxiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => config,
  (error: AxiosError) => Promise.reject(error),
);

AxiosInstance.interceptors.response.use(
  (response: AxiosResponse<IBaseResponse>) => response,
  (error: AxiosError<IBaseResponse>) => Promise.reject(error),
);
