import type { GetStaticProps, NextPage } from "next";
import { Layout } from "src/layout";
import { client } from "src/lib/client";
import { CardPortion } from "src/components/blog/card";
import { Title } from "src/components/title";
import { PagenationComponent } from "src/components/blog";
import { Blog, BlogProps } from "src/types/types";
import { useRouter } from "next/router";
import { useViewportSize } from "src/lib/mantine";

const Blog: NextPage<BlogProps> = (props) => {
  const router = useRouter();
  const root = router.asPath === "/";
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }
  const isMobile = width < 576;

  const numberToShow = root ? (isMobile ? 4 : 6) : props.contents.length;
  let filteredData = props.contents.slice(0, numberToShow);
  console.log(filteredData);

  return (
    <Layout>
      <div className="flex min-h-[85vh] max-w-[100vw] flex-col justify-between">
        <div className="py-10 sm:mx-auto">
          <Title>Blog</Title>
          <ul className="my-16 flex min-h-fit flex-col justify-center">
            {filteredData.map((content) => {
              console.log(`CONTENT: ${content.id}`);

              return (
                <CardPortion
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
      <div className="mb-16 flex justify-center">
        <PagenationComponent />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};

export default Blog;
