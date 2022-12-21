import { type AppType } from 'next/dist/shared/lib/utils';
import '../styles/globals.css';

import { ModalContextProvider } from '@context/ModalContext';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ModalContextProvider>
      <Component {...pageProps} />
    </ModalContextProvider>
  );
};

export default MyApp;
