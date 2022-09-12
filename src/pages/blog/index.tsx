import { Center, Loader } from "@mantine/core";
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppTitle } from "src/components/atom/appTitle";
import { Title } from "src/components/atom/title";
import { BlogCards } from "src/components/card/blogCards";
import { Layout } from "src/layout";
import { clientBlog } from "src/pages/api/blog";
import { Blog, BlogProps } from "src/types";

const Blog: NextPage<BlogProps> = (props) => {
  const [items, setItems] = useState<BlogProps["contents"]>(props.contents);

  const hasMore =
    props.totalCount > items.length || props.totalCount !== items.length;

  const fetchBlog = async () => {
    const { data } = await axios.get<BlogProps>("/api/blog", {
      params: {
        offset: items.length,
      },
    });

    setItems([...items, ...data.contents]);
  };
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <AppTitle title="blog" description="ブログ一覧" />
      <div className="flex flex-col justify-between">
        <div className="py-10 sm:mx-auto">
          <Title>Blog</Title>
          <InfiniteScroll
            next={fetchBlog}
            loader={
              <Center>
                <Loader />
              </Center>
            }
            dataLength={items.length}
            hasMore={hasMore}
          >
            <ul className="my-16 flex flex-col justify-center">
              <BlogCards items={items} />
            </ul>
          </InfiniteScroll>

          {/* {props.contents.length > 6 ? (
            <Center mt="xl">
              <Pagination
                color={"dark"}
                total={Math.ceil(props.totalCount / 6) || 1}
              />
            </Center>
          ) : null} */}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const blogData = await clientBlog.getList<Blog>({
    endpoint: "blog",
    queries: { limit: 999 },
  });
  return {
    props: blogData,
  };
};

export default Blog;
