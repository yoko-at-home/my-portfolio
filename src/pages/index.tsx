import type { GetStaticProps, NextPage } from "next";
import { GitHubReps } from "src/components/github";
import { Hero } from "src/components/hero";
import { Portfolios } from "src/components/portfolio";
import { TwitterSec } from "src/components/twitter";
import { Layout } from "src/layout";
import { Button } from "@mantine/core";
import { Title } from "src/components/title";
import Link from "next/link";
import { client } from "src/lib/client";
import { Blog, BlogProps } from "src/types/types";
import { CardPortion } from "src/components/blog/card";

const Home: NextPage<BlogProps> = (props) => {
  return (
    <Layout>
      <Hero />
      <div className="mx-auto max-w-7xl px-4">
        <div>
          <Title>Blog</Title>
          <ul className="my-16 flex min-h-fit flex-col justify-center">
            {props.contents.map((content) => {
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
        <Portfolios />
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

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};

export default Home;
