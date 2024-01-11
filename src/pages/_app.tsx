import { Providers } from '@lib/context';
import '@styles/app.scss';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({
  weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers nextFont={inter}>
      <Head>
        <title>Welcome to Digitree | Digitree</title>
        <meta
          name="description"
          content="Digitree is a digital marketing agency based in Bangladesh that provides a wide range of digital marketing services to help businesses grow and succeed online."
        />
      </Head>
      <Component {...pageProps} />
    </Providers>
  );
}
