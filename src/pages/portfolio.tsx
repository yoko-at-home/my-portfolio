import { NextPage } from "next";
import { Portfolios } from "src/components/portfolio";
import { Layout } from "src/layout";

const PortfolioPage: NextPage = () => {
  return (
    <Layout>
      <Portfolios />
    </Layout>
  );
};

export default PortfolioPage;
