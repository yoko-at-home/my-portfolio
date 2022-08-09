import type { NextPage } from "next";
import { Hero } from "src/components/hero";
import { Layout } from "src/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
