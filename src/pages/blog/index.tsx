import { CardPortion } from "src/components/blog/card";
import { data } from "src/components/blog/data";
import { Title } from "src/components/title";
import { NextPage } from "next";
import { Layout } from "src/layout";
import { Image, Pagination } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { useState } from "react";

const reversedData = data.reverse();

const BlogPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pagination = usePagination({ total: 10, initialPage: 1 });
  console.log(pagination);

  return (
    <Layout>
      <div className="mx-4 pb-10 sm:mx-auto">
        <Title>Blog</Title>
        {isLoading ? (
          <div className="my-16 flex min-h-fit justify-center">
            <Image
              src="/assets/svgs/Loader.svg"
              alt="loader"
              width={30}
              height={30}
            />
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
      <div className="mb-16 flex justify-center">
        <Pagination total={data.indexOf.length} color="dark" withEdges />
      </div>
    </Layout>
  );
};

export default BlogPage;
