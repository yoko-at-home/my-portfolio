import Head from "next/head";
import { FC } from "react";

type Props = {
  title: string;
  description: string;
  ImageUrl?: string;
  ogUrl?: string;
};

export const AppTitle: FC<Props> = ({
  title,
  description,
  ImageUrl,
  ogUrl,
}) => {
  const newTitle = `${title} | yoko's portfolio`;
  return (
    <Head>
      <title>{newTitle}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/assets/favicons/favicon.ico" />
      {/* <meta property="og:url" content={ogUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ImageUrl} />
      <meta property="og:type" content="website" /> */}
      {/* <!-- Twitter --> */}
      {/* <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ImageUrl} />
      <meta name="twitter:image:width" content="512" />
      <meta name="twitter:image:height" content="512" />
      <meta name="twitter:site" content="metaData.twitterAccount" />
      <meta name="twitter:creator" content="metaData.twitterAccount" /> */}
    </Head>
  );
};
