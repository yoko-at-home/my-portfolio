import type { NextPage } from "next";
import { Blogs } from "src/components/blog";
import { GitHubSec } from "src/components/github";
import { Hero } from "src/components/hero";
import { Portfolios } from "src/components/portfolio";
import { TwitterSec } from "src/components/twitter";
import { Layout } from "src/layout";
import { Button } from "@mantine/core";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <div className="mx-auto max-w-7xl px-4">
        <Blogs />
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
          <GitHubSec />
          <TwitterSec />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
