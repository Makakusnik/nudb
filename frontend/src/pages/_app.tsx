import { type AppType } from 'next/dist/shared/lib/utils';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ModalContextProvider } from '@context/ModalContext';
import { NewModalContextProvider } from '@context/NewModalContext';

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  return (
    <ModalContextProvider>
      <NewModalContextProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </NewModalContextProvider>
    </ModalContextProvider>
  );
};

export default MyApp;
