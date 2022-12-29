import type { Product } from '@type/Product';
import { useQuery } from 'react-query';

import { fetchData } from '@lib/fetching';

export function useProducts() {
  const rqResponse = useQuery(['key'], fetchData<Product>);
  const responseData = { ...rqResponse, data: rqResponse.data?.data, meta: rqResponse.data?.meta };
  return responseData;
}
