import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Suspense } from "react";
import { Title } from "src/components/atom/title";
import { PortfolioCard } from "src/components/card";
import { Layout } from "src/layout";
import { client } from "src/pages/api/portfolio/client";
import { Blog, BlogProps } from "src/types/types";

const PortfolioPage: NextPage<BlogProps> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <Title>Portfolio</Title>
      <Suspense fallback="loading...">
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
      </Suspense>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const portfolioData = await client.getList<Blog>({ endpoint: "portfolio" });
  return {
    props: portfolioData,
    revalidate: 60 * 10,
  };
};

export default PortfolioPage;
