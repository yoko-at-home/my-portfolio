import type { NextPage } from "next";
import { Blog } from "src/components/blog";
import { Hero } from "src/components/hero";
import { Layout } from "src/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <div className="mx-4 sm:mx-auto">
        <Blog />
      </div>
    </Layout>
  );
};

export default Home;
