import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import { CardPortion } from "src/components/blog/card";
import { Title } from "@mantine/core";
import { PagenationComponent } from "src/components/blog";

export type Blog = {
  title: string;
  body: string;
  content: string;
  eyecatch: {
    url: string;
  };
};

type Props = MicroCMSListResponse<Blog>;

const Blog: NextPage<Props> = (props) => {
  return (
    <Layout>
      <div className="flex min-h-[85vh] min-w-[100vh] flex-col justify-between">
        <div>
          <Title>Blog</Title>
          <ul className="my-16 flex min-h-fit flex-col justify-center">
            {props.contents.map((content) => {
              return (
                <CardPortion
                  id={content.id}
                  key={content.id}
                  title={content.title}
                  content={content.body}
                  date={content.createdAt}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mb-16 flex justify-center">
        <PagenationComponent />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};

export default Blog;
