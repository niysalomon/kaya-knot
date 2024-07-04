import { AppProps } from 'next/app';
import './styles/globals.css';
 
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import type { AppProps } from 'next/app';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
const Layout = dynamic(() => import('@/common/layout'));

export default function myApp({
  Component,
  pageProps,
}: AppProps<{ readonly dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchInterval: 600000,
          },
        },
      })
  );
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}> 
          <Component {...pageProps} key={router.asPath} /> 
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
