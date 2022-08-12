import { NextPage } from "next";
import { Head, Html, Main, NextScript } from "next/document";

const MyDocument: NextPage = () => {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        <meta name="title" content="Lightsound Shimabu" />
        <meta
          name="description"
          content="ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。"
        />
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
