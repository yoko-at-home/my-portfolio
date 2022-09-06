import "src/lib/tailwind.css";

import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { Suspense } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback="loading...">
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionOptions={{ key: "mantine", prepend: false }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </Suspense>
  );
}

export default MyApp;
