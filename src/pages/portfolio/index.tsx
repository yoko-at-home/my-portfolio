import { Center, Loader } from "@mantine/core";
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppTitle } from "src/components/atom/appTitle";
import { Title } from "src/components/atom/title";
import { PortfolioCards } from "src/components/card";
import { Layout } from "src/layout";
import { metaData } from "src/metadata";
import { client } from "src/pages/api/portfolio/client";
import { Blog, BlogProps } from "src/types";

const PortfolioPage: NextPage<BlogProps> = (props) => {
  const [items, setItems] = useState<BlogProps["contents"]>(props.contents);
  const router = useRouter();

  const hasMore =
    props.totalCount > items.length || props.totalCount !== items.length;

  const fetchPortfolio = async () => {
    const { data } = await axios.get<BlogProps>("/api/portfolio", {
      params: {
        offset: items.length,
      },
    });

    setItems([...items, ...data.contents]);
  };
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <AppTitle
        title="portfolio"
        description="ポートフォリオ一覧です"
        ImageUrl={metaData.siteUrl + metaData.siteLogo}
        ogUrl={metaData.siteUrl + router.pathname}
      />

      <Title>Portfolio</Title>
      <InfiniteScroll
        next={fetchPortfolio}
        loader={
          <Center>
            <Loader />
          </Center>
        }
        dataLength={items.length}
        hasMore={hasMore}
      >
        <div className="relative w-screen max-w-7xl" id="home">
          <PortfolioCards items={items} />
        </div>
      </InfiniteScroll>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const portfolioData = await client.getList<Blog>({
    endpoint: "portfolio",
    queries: { limit: 100 },
  });
  return {
    props: portfolioData,
    revalidate: 10,
  };
};

export default PortfolioPage;
