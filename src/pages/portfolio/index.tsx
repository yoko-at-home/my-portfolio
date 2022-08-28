import type { GetStaticProps, NextPage } from "next";
import { Layout } from "src/layout";
import { client } from "src/pages/api/client";
import { Title } from "src/components/title";
import { Blog, BlogProps } from "src/types/types";
import { PortfolioCard } from "src/components/portfolio";

const PortfolioPage: NextPage<BlogProps> = (props) => {
  return (
    <Layout>
      <Title>Portfolio</Title>
      <div className="relative w-[80vw]">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {props.contents.map((content: any) => {
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
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const portfolioData = await client.getList<Blog>({ endpoint: "portfolio" });
  return {
    props: portfolioData,
  };
};

export default PortfolioPage;
