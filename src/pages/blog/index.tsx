import type { GetStaticProps, NextPage } from "next";
import { Title } from "src/components/atom/title";
import { BlogCard } from "src/components/card";
import { Layout } from "src/layout";
import { clientBlog } from "src/pages/api/clientBlog";
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

          {props.contents.length > 6 ? (
            <div className="flex justify-center"></div>
          ) : null}
        </div>
      </div>
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
