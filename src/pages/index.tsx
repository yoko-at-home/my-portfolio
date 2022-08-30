import type { GetStaticProps, NextPage } from "next";
import { GitHubReps } from "src/components/github";
import { Hero } from "src/components/atom/hero";
import { TwitterSec } from "src/components/twitter";
import { Layout } from "src/layout";
import { Button } from "@mantine/core";
import { Title } from "src/components/atom/title";
import Link from "next/link";
import { Blog, BlogPortfolioProps } from "src/types/types";
import { BlogCard } from "src/components/card/blogCard";
import { useRouter } from "next/router";
import { useViewportSize } from "src/lib/mantine";
import { clientBlog } from "src/pages/api/clientBlog";
import { client } from "src/pages/api/client";
import { PortfolioCard } from "src/components/card/portfolioCard";

const Home: NextPage<BlogPortfolioProps> = (props) => {
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
  let filteredPortfolioData = props.portfolioData.contents.slice(
    0,
    numberToShow
  );

  return (
    <Layout>
      <Hero />
      <div className="mx-auto max-w-7xl px-4">
        <div>
          <Title>Blog</Title>
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
        </div>
        <div className="flex justify-center pb-10">
          <Link href="/blog">
            <Button color="dark">View All</Button>
          </Link>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-10">
          <Title>Portfolio</Title>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPortfolioData.map((content: any) => {
              return (
                <PortfolioCard
                  id={content.id}
                  key={content.id}
                  title={content.title}
                  thumbnail={content.eyecatch?.url}
                  date={content.date}
                  lead={content.lead}
                />
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center pb-10">
          <Link href="/portfolio">
            <Button color="dark">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <GitHubReps />
          <TwitterSec />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const blogData = await clientBlog.getList<Blog>({ endpoint: "blog" });
    const portfolioData = await client.getList<Blog>({ endpoint: "portfolio" });
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
