import { NextPage } from "next";
import { Head, Html, Main, NextScript } from "next/document";
import { metaData } from "src/metadata";

const MyDocument: NextPage = () => {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        <meta name="title" content="Lightsound Shimabu" />
        <meta name="description" content={metaData.description} />
        <meta
          property="og:image"
          content="https://my-portfolio-shimabu.vercel.app/assets/img/Thumbnail.webp"
        />
      </Head>
      <body className="bg-white text-black antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
