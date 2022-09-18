import { NextPage } from "next";
import { Head, Html, Main, NextScript } from "next/document";

const MyDocument: NextPage = () => {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
