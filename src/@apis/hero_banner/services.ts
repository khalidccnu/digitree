import { IHeroBannerResponse } from '@apis/hero_banner/interfaces';
import { AxiosInstance } from '@lib/config';
import { IBaseFilter, TId } from '@lib/interfaces';
import { responseHandler } from '@lib/utils';
import { $$ } from '@lib/utils/_functions';
import { AxiosError } from 'axios';

const END_POINT: string = '/hero-banners';

export const HeroBannerServices = {
  NAME: END_POINT,

  async findById(id: TId, options: IBaseFilter): Promise<IHeroBannerResponse> {
    try {
      if (!id) return { data: null } as any;

      const data = await AxiosInstance.get(`${END_POINT}/${id}?${$$.queryNormalizer(options)}`);
      return Promise.resolve(data?.data);
    } catch (error) {
      throw responseHandler(error as AxiosError);
    }
  },
};
