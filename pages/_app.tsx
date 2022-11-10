import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/styles/globals.css";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
