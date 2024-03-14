import { IBaseEntity, IBaseResponse, IImageResponse } from '@lib/interfaces';

export interface IHeroBannerAttr {
  title: string;
  description: string;
  image: IImageResponse;
  video: string;
}

export interface IHeroBanner extends IBaseEntity {
  attributes: IBaseEntity['attributes'] & IHeroBannerAttr;
}

export interface IHeroBannerResponse extends IBaseResponse {
  data: IHeroBanner;
}
