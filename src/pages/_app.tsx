import { AppProps } from 'next/app';
import './styles/globals.css';
import { DehydratedState } from '@tanstack/react-query';

function MyApp({ 
  Component,
  pageProps,
}: AppProps<{ readonly dehydratedState: DehydratedState  }>) {
  return <Component {...pageProps} />;
}

export default MyApp;