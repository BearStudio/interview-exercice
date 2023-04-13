import { ChakraProvider, Stack } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
import './../detail.scss';
import './../card.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Interview exercice</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Stack h="100vh">
            <Component {...pageProps} />
          </Stack>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}
