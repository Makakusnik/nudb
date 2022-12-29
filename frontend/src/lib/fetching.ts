import type { StrapiResponse } from '@type/Api';

export const fetchData = async <T>(): Promise<StrapiResponse<T>> => {
  // TODO Tahaj z env
  const response = await fetch('http://localhost:1337/api/products', {
    headers: {
      Authorization:
        'bearer 39ec782402ad006d39be04cd2319188c46236726736ba5adff87e41f31ce326ddc7a0db67ac3a27ed98a8f8ddaff44b3a668455b0dd8ae55090fd4903d1096b38c3b5a637f6873aa332a107a5ee3772bcd215b2ec1740ba91113e133fb4f527b05ffc83b48f14a0d095dae4d79570833f1d51ab16b8c3b4c24538d72bf0e37f0',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const raw = (await response.json()) as StrapiResponse<T>;

  return raw;
};
