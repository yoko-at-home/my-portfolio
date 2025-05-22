/* eslint-disable @next/next/no-title-in-document-head */
import { Button, Center } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { ErrorWrapper } from "src/components/atom/error";
import { Hero } from "src/components/atom/hero";
import { Title } from "src/components/atom/title";
import { PortfolioCardSlider } from "src/components/card/portfolioCardSlider";
import { Layout } from "src/layout";
import { useIsMobile } from "src/lib/useIsMobile";
import { clientBlog } from "src/pages/api/blog";
import { client } from "src/pages/api/portfolio/client";
import type { Blog, BlogPortfolioProps } from "src/types";

const Home: NextPage<BlogPortfolioProps> = ({ blogData, portfolioData }) => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();
  const numberToShowBlogOnMobile = 4;
  const numberToShowOnPC = 6;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredBlogData = blogData.contents.slice(
    0,
    isMounted && isMobile ? numberToShowBlogOnMobile : numberToShowOnPC
  );

  return (
    <Layout>
      <Hero />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl pb-10">
          <Title>Portfolio</Title>
          <ErrorWrapper message="Failed to Fetch portfolio Data.">
            <Suspense
              fallback={
                <Center>
                  <Skeleton height={50} />
                  <Skeleton count={10} />
                </Center>
              }
            >
              <PortfolioCardSlider items={portfolioData.contents} />
            </Suspense>
          </ErrorWrapper>
        </div>
        <div className="flex justify-center pb-10">
          <Button component={Link} href="/portfolio" color="dark">
            View All
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const blogData = await clientBlog.getList<Blog>({
      endpoint: "blog",
      queries: { limit: 6, offset: 0 },
    });
    const portfolioData = await client.getList<Blog>({
      endpoint: "portfolio",
      queries: { limit: 6, offset: 0 },
    });

    // 新しい順（降順）にソート
    const sortedPortfolioData = {
      ...portfolioData,
      contents: [...portfolioData.contents].sort(
        (a, b) =>
          new Date(b.publishedAt as string).getTime() -
          new Date(a.publishedAt as string).getTime()
      ),
    };

    return {
      props: {
        blogData: blogData,
        portfolioData: sortedPortfolioData,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        err: "Error occurred. Try later!",
      },
    };
  }
};

export default Home;
