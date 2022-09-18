import { NextPage } from "next";
import { Html, Main, NextScript } from "next/document";

const MyDocument: NextPage = () => {
  return (
    <Html lang="ja">
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
