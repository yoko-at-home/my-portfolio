import type { GetStaticProps, NextPage } from "next";
import { GitHubReps } from "src/components/github";
import { Hero } from "src/components/hero";
import { TwitterSec } from "src/components/twitter";
import { Layout } from "src/layout";
import { Button } from "@mantine/core";
import { Title } from "src/components/title";
import Link from "next/link";
import { Blog, BlogProps } from "src/types/types";
import { CardPortion } from "src/components/blog/card";
import { useRouter } from "next/router";
import { useViewportSize } from "src/lib/mantine";
import { clientBlog } from "src/pages/api/clientBlog";
import { client } from "src/pages/api/client";
import { PortfolioCard } from "src/components/portfolio/card";

const Home: NextPage<BlogProps> = (props) => {
  const router = useRouter();
  const root = router.asPath === "/";
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }
  const isMobile = width < 576;

  const numberToShow = root ? (isMobile ? 4 : 6) : props.contents.length;
  // let filteredData = props.contents.slice(0, numberToShow);

  return (
    <Layout>
      <Hero />
      <div className="mx-auto max-w-7xl px-4">
        <div>
          <Title>Blog</Title>
          <ul className="my-16 flex min-h-fit flex-col justify-center">
            {props.blogData.contents.map((content: any) => {
              return (
                <CardPortion
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
            {props.portfolioData.contents.map((content: any) => {
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
        err: "データ取得で問題が発生しました。",
      },
    };
  }
};

export default Home;
