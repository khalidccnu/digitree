import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Welcome to Digitree | Digitree</title>
        <meta
          name="description"
          content="Digitree is a digital marketing agency based in Bangladesh that provides a wide range of digital marketing services to help businesses grow and succeed online."
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
