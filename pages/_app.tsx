import {
  AppCacheProvider,
  type EmotionCacheProviderProps,
} from "@mui/material-nextjs/v14-pagesRouter";
import type { AppProps } from "next/app.js";
import Head from "next/head.js";

export default function App({ Component, pageProps = {}, emotionCache }: AppProps & EmotionCacheProviderProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="white" />
      </Head>
      <AppCacheProvider emotionCache={emotionCache}>
        <Component {...pageProps} />
      </AppCacheProvider>
    </>
  );
}
