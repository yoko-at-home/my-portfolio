import type { GetStaticProps, NextPage } from "next";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import { CardPortion } from "src/components/blog/";
import { Title } from "src/components/title";
import { PagenationComponent } from "src/components/pagination";
import { Blog, BlogProps } from "src/types/types";

const Blog: NextPage<BlogProps> = (props) => {
  return (
    <Layout>
      <div className="flex min-h-[85vh] max-w-[100vw] flex-col justify-between">
        <div className="py-10 sm:mx-auto">
          <Title>Blog</Title>
          <ul className="my-16 flex min-h-fit flex-col justify-center">
            {props.contents.map((content) => {
              return (
                <CardPortion
                  id={content.id}
                  key={content.id}
                  title={content.title}
                  createdAt={content.createdAt}
                  lead={content.lead}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mb-16 flex justify-center">
        <PagenationComponent totalCount={props.totalCount} />
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

export default Blog;
