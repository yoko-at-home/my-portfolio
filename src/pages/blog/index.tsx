import type { GetStaticProps, NextPage } from "next";
import { Layout } from "src/layout";
import { clientBlog } from "src/pages/api/clientBlog";
import { Title } from "src/components/title";
import { Blog, BlogProps } from "src/types/types";
import { BlogCard } from "src/components/card";

const Blog: NextPage<BlogProps> = (props) => {
  return (
    <Layout>
      <div className="flex min-h-[85vh] max-w-[100vw] flex-col justify-between">
        <div className="py-10 sm:mx-auto">
          <Title>Blog</Title>
          <ul className="my-16 flex min-h-fit flex-col justify-center">
            {props.contents.map((content) => {
              return (
                <BlogCard
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
      <div className="mb-16 flex justify-center"></div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const blogData = await clientBlog.getList<Blog>({ endpoint: "blog" });
  return {
    props: blogData,
  };
};

export default Blog;
