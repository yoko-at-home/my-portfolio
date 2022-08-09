import type { NextPage } from "next";
import { Layout } from "src/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="p-20">Homeです</div>
    </Layout>
  );
};

export default Home;
