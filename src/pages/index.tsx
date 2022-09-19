/* eslint-disable @next/next/no-title-in-document-head */
import { Button, Center, Loader } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { ErrorWrapper } from "src/components/atom/error";
import { Hero } from "src/components/atom/hero";
import { Title } from "src/components/atom/title";
import { PortfolioCards } from "src/components/card";
import { BlogCards } from "src/components/card/blogCards";
import { GitHubReps } from "src/components/github";
import { TwitterSec } from "src/components/twitter";
import { Layout } from "src/layout";
import { useViewportSize } from "src/lib/mantine";
import { clientBlog } from "src/pages/api/blog";
import { client } from "src/pages/api/portfolio/client";
import { Blog, BlogPortfolioProps } from "src/types";

const Home: NextPage<BlogPortfolioProps> = (props) => {
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }
  const isMobile = width < 576;

  let filteredBlogData = props.blogData.contents.slice(0, isMobile ? 4 : 6);
  return (
    <Layout>
      <Head>
        <title>Welcome 🐈 | yoko&#39;s portfolio</title>
        <meta name="description" content="Welcom to my portfolio site!" />
      </Head>

      <Hero />
      <div className="mx-4 max-w-7xl sm:mx-auto sm:px-4">
        <div>
          <Title>Blog</Title>
          <ErrorWrapper message="Failed to Fetch Blog Data.">
            <Suspense
              fallback={
                <Center>
                  <Skeleton height={50} />
                  <Skeleton count={6} />
                </Center>
              }
            >
              <BlogCards items={filteredBlogData} />
            </Suspense>
          </ErrorWrapper>
          <div className="flex justify-center pb-10">
            <Link href="/blog">
              <Button color="dark">View All</Button>
            </Link>
          </div>
        </div>

        <div className=" mx-auto max-w-7xl px-4 pb-10">
          <Title>Portfolio</Title>
          <ErrorWrapper message="Failed to Fetch portfolio Data.">
            <Suspense
              fallback={
                <Center>
                  <Skeleton height={50} />
                  <Skeleton count={6} />
                </Center>
              }
            >
              <PortfolioCards items={props.portfolioData.contents} />
            </Suspense>
          </ErrorWrapper>
        </div>
        <div className="flex justify-center pb-10">
          <Link href="/portfolio">
            <Button color="dark">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ErrorWrapper message="Failed to Fetch GitHub Data.">
            <Suspense
              fallback={
                <Center>
                  <Loader />
                </Center>
              }
            >
              <GitHubReps />
            </Suspense>
          </ErrorWrapper>
          <ErrorWrapper message="Failed to Fetch Twitter Data.">
            <Suspense
              fallback={
                <Center>
                  <Loader />
                </Center>
              }
            >
              <TwitterSec />
            </Suspense>
          </ErrorWrapper>
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
      queries: { limit: 6, offset: 2 },
    });
    return {
      props: {
        blogData: blogData,
        portfolioData: portfolioData,
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
