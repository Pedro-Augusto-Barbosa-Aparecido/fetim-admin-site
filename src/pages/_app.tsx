import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

import Head from "next/head";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Head>
        <title>Administration App</title>
      </Head>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
