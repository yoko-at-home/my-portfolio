import { Center, Pagination } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import { AppTitle } from "src/components/atom/appTitle";
import { Title } from "src/components/atom/title";
import { BlogCard } from "src/components/card";
import { Layout } from "src/layout";
import { clientBlog } from "src/pages/api/blog";
import { Blog, BlogProps } from "src/types";

const Blog: NextPage<BlogProps> = (props) => {
  const handleOnChange = () => {
    alert("clicked");
  };

  return (
    <Layout>
      <AppTitle title="blog" description="ブログ一覧" />
      <div className="flex flex-col justify-between">
        <div className="py-10 sm:mx-auto">
          <Title>Blog</Title>
          <ul className="my-16 flex flex-col justify-center">
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
            <Center mt="xl">
              <Pagination
                onChange={handleOnChange}
                color={"dark"}
                total={Math.ceil(props.totalCount / 6) || 1}
              />
            </Center>
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
