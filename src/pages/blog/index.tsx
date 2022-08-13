import { CardPortion } from "src/components/blog/card";
import { data } from "src/components/blog/data";
import { Title } from "src/components/title";
import { NextPage } from "next";
import { Layout } from "src/layout";
import { Pagination } from "@mantine/core";
import { usePagination } from "@mantine/hooks";

const reversedData = data.reverse();

const BlogPage: NextPage = () => {
  const pagination = usePagination({ total: 10, initialPage: 1 });
  console.log(pagination);

  return (
    <Layout>
      <div className="mx-4 pb-10 sm:mx-auto">
        <Title>Blog</Title>
        {reversedData.map((item) => {
          return (
            <CardPortion
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              date={item.date}
            ></CardPortion>
          );
        })}
      </div>
      <div className="mb-16 flex justify-center">
        <Pagination total={data.indexOf.length} color="dark" withEdges />
      </div>
    </Layout>
  );
};

export default BlogPage;
