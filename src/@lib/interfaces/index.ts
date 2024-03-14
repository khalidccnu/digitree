export type TId = string | number;

export interface IImageResponse {
  data: {
    id: TId;
    attributes: {
      name: string;
      alternativeText: null;
      caption: null;
      width: number;
      height: number;
      formats: null;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      provider_metadata: object;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface IMetaResponse {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface IBaseResponse<D = any> {
  data: D;
  meta: IMetaResponse;
}

export interface IBaseEntity {
  id: TId;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface IBaseFilter {
  populate?: string;
}
