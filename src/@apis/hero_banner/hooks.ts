import { QueryConfig } from '@lib/config';
import { IBaseFilter, TId } from '@lib/interfaces';
import { useQuery } from '@tanstack/react-query';
import { HeroBannerServices } from './services';

export const HeroBannerHooks = {
  useFindById: ({
    id,
    options,
    config,
  }: {
    id: TId;
    options: IBaseFilter;
    config?: QueryConfig<typeof HeroBannerServices.findById>;
  }) => {
    return useQuery({
      ...config,
      queryKey: [HeroBannerServices.findById.name, id, options],
      queryFn: () => HeroBannerServices.findById(id, options),
    });
  },
};
