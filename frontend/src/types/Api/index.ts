export interface URLParameter {
  name: string;
  value: string;
}

export interface StrapiObject<T> {
  id: number;
  attributes: T;
}

export interface StrapiResponse<T> {
  data: StrapiObject<T>[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: 1;
    };
  };
}
