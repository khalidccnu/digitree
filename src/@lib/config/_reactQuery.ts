import { QueryClient, UseQueryOptions } from '@tanstack/react-query';
import { PromiseValue } from 'type-fest';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export type QueryConfig<FetcherFnType extends (...args: any) => any> = UseQueryOptions<
  PromiseValue<ReturnType<FetcherFnType>>
>;
