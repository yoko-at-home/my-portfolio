import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { metaData } from "src/metadata";

type Props = {
  title: string;
  description: string;
  url: string;
};

export const AppTitle: FC<Props> = ({ title, description, url }) => {
  const newTitle = `${title} | yoko's portfolio`;
  const router = useRouter();

  return (
    <Head>
      <title>{newTitle}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/assets/favicons/favicon.ico" />
      <meta property="og:url" content={`${metaData.siteUrl}${router.asPath}`} />
      <meta property="og:site_name" content={metaData.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={url} />
    </Head>
  );
};
