import { CardPortion } from "src/components/blog/card";
import { data } from "src/components/blog/data";
import { Title } from "src/components/title";
import { NextPage } from "next";
import { Layout } from "src/layout";
import { Image } from "@mantine/core";
import { useState } from "react";
import { PagenationComponent } from "src/components/blog";

const reversedData = data.reverse();
const firstTenArticle = reversedData.filter(
  (reversedData) => reversedData.id <= 10
);
const BlogPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout>
      <div className="pb-10">
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
            {firstTenArticle.map((item) => {
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
        <PagenationComponent />
      </div>
    </Layout>
  );
};

export default BlogPage;
