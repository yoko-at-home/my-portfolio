import { Center, Loader } from "@mantine/core";
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import { AppTitle } from "src/components/atom/appTitle";
import { Title } from "src/components/atom/title";
import { BlogCards } from "src/components/card/blogCards";
import { Layout } from "src/layout";
import { metaData } from "src/metadata";
import { clientBlog } from "src/pages/api/blog";
import { Blog, BlogProps } from "src/types";

const Blog: NextPage<BlogProps> = (props) => {
  const [items, setItems] = useState<BlogProps["contents"]>(props.contents);
  const router = useRouter();

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
  if (router.isFallback) {
    return (
      <>
        <Skeleton height={50} />
        <Skeleton count={6} />
      </>
    );
  }
  return (
    <Layout>
      <AppTitle
        title="🐈 Blog 🐈 "
        description="ブログ一覧です"
        ImageUrl={metaData.siteUrl + metaData.siteLogo}
        ogUrl={metaData.siteUrl + router.pathname}
      />
      <div className="flex flex-col justify-between" id="home">
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
            <ul className="my-4 flex flex-col justify-center md:my-16">
              <BlogCards items={items} />
            </ul>
          </InfiniteScroll>
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
