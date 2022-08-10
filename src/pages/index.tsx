import type { NextPage } from "next";
import { BlogSec } from "src/components/blog";
import { GitHubSec } from "src/components/github";
import { Hero } from "src/components/hero";
import { PortfolioSec } from "src/components/portfolio";
import { TwitterSec } from "src/components/twitter";
import { Layout } from "src/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <div className="mx-4 sm:mx-auto">
        <BlogSec />
        <PortfolioSec />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <GitHubSec />
          <TwitterSec />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
