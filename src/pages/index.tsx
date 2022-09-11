import { Button, Center, Loader } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Suspense, useState } from "react";
import { AppTitle } from "src/components/atom/appTitle";
import { ErrorWrapper } from "src/components/atom/error";
import { Hero } from "src/components/atom/hero";
import { Title } from "src/components/atom/title";
import { PortfolioCards } from "src/components/card";
import { BlogCard } from "src/components/card/blogCard";
import { GitHubReps } from "src/components/github";
import { TwitterSec } from "src/components/twitter";
import { Layout } from "src/layout";
import { useViewportSize } from "src/lib/mantine";
import { clientBlog } from "src/pages/api/blog";
import { client } from "src/pages/api/portfolio/client";
import { Blog, BlogPortfolioProps, BlogProps } from "src/types";

const Home: NextPage<BlogPortfolioProps> = (props) => {
  const [items, setItems] = useState<BlogProps["contents"]>(
    props.portfolioData.contents
  );

  const router = useRouter();
  const root = router.asPath === "/";
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }
  const isMobile = width < 576;

  const numberToShow = root
    ? isMobile
      ? 4
      : 6
    : props.blogData.contents.length;

  let filteredBlogData = props.blogData.contents.slice(0, numberToShow);

  return (
    <Layout>
      <AppTitle title="welcome" description="welcome to my portfolio site" />

      <Hero />
      <div className="mx-auto max-w-7xl px-4">
        <div>
          <Title>Blog</Title>
          <ErrorWrapper message="Failed to Fetch Blog Data.">
            <Suspense
              fallback={
                <Center>
                  <Loader />
                </Center>
              }
            >
              <ul className="my-16 flex min-h-fit flex-col justify-center">
                {filteredBlogData.map((content: any) => {
                  return (
                    <BlogCard
                      id={content.id}
                      key={content.id}
                      title={content.title}
                      lead={content.lead}
                      createdAt={content.createdAt}
                    />
                  );
                })}
              </ul>
            </Suspense>
          </ErrorWrapper>
        </div>
        <div className="flex justify-center pb-10">
          <Link href="/blog">
            <Button color="dark">View All</Button>
          </Link>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-10">
          <Title>Portfolio</Title>
          <ErrorWrapper message="Failed to Fetch portfolio Data.">
            <Suspense
              fallback={
                <Center>
                  <Loader />
                </Center>
              }
            >
              <PortfolioCards items={items} />
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
    const blogData = await clientBlog.getList<Blog>({ endpoint: "blog" });
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
