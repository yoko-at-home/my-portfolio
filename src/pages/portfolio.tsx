import { NextPage } from "next";
import { PortfolioSec } from "src/components/portfolio";
import { Layout } from "src/layout";

const PortfolioPage: NextPage = () => {
  return <Layout>
    <PortfolioSec/>
  </Layout>;
};

export default PortfolioPage;
