/* eslint-disable @next/next/no-title-in-document-head */
import { gql } from "@apollo/client";
import { Button, Center, Loader } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { ErrorWrapper } from "src/components/atom/error";
import { Hero } from "src/components/atom/hero";
import { Title } from "src/components/atom/title";
import { BlogCards } from "src/components/card/blogCards";
import { GitHubReps } from "src/components/card/gitHubCards";
import { PortfolioCardSlider } from "src/components/card/portfolioCardSlider";
import { TwitterFeed } from "src/components/twitter";
import { Layout } from "src/layout";
import { useViewportSize } from "src/lib/mantine";
import { clientBlog } from "src/pages/api/blog";
import { githubClient } from "src/pages/api/github";
import { client } from "src/pages/api/portfolio/client";
import { Blog, BlogPortfolioProps, GitHubCardProps } from "src/types";

type Props = BlogPortfolioProps & GitHubCardProps;

const Home: NextPage<Props> = ({ blogData, pinnedItems, portfolioData }) => {
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }
  const isMobile = width < 576;

  let filteredBlogData = blogData.contents.slice(0, isMobile ? 4 : 6);
  let filteredGitHubData = pinnedItems.slice(0, isMobile ? 3 : 6);
  return (
    <Layout>
      <Head>
        <title>Welcome 🐈 | yoko&#39;s portfolio</title>
        <meta name="description" content="Welcom to my portfolio site!" />
      </Head>

      <Hero />
      <div className="mx-auto max-w-7xl px-4">
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

        <div className="mx-auto max-w-7xl pb-10">
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
              <PortfolioCardSlider items={portfolioData.contents} />
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
              <GitHubReps pinnedItems={filteredGitHubData} />
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
              <TwitterFeed />
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

    // apollo start
    const { data } = await githubClient.query({
      query: gql`
        {
          user(login: "yoko-at-home") {
            pinnedItems(first: 6, types: [REPOSITORY]) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    name
                    id
                    url
                    description
                    stargazers {
                      totalCount
                    }
                    forkCount
                    primaryLanguage {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });

    const { user } = data;
    const pinnedItems = user.pinnedItems.edges.map((edge: any) => edge.node);
    //apollo end
    return {
      props: {
        blogData: blogData,
        pinnedItems,
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
