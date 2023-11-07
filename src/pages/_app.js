import "@/styles/globals.css";
import "@/services/firebase/index";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (<>      <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider></>

  );
}
