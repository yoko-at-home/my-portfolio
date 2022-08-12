import { CardPortion } from "src/components/blog/card";
import { data } from "src/components/blog/data";
import { Title } from "src/components/title";
import { NextPage } from "next";
import { Layout } from "src/layout";
const BlogPage: NextPage = () => {
  return (
    <Layout>
      <div className="mx-4 pb-10 sm:mx-auto">
        <Title>Blog</Title>
        {data.map((item) => {
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
    </Layout>
  );
};

export default BlogPage;
