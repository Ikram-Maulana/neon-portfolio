import Script from "next/script";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://analytics.ikrammaulana.my.id/script.js"
        strategy="lazyOnload"
        data-website-id="c27f1d9d-4f96-4854-8ac9-a2f9bd9b043c"
      />
    </>
  );
}

export default MyApp;
