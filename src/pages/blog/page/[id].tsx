import { Button } from "@mantine/core";
import { Layout } from "src/layout";
import { useRouter } from "next/router";
import { data } from "src/components/blog/data";
import { PagenationComponent } from "src/components/blog";
import { FC } from "react";
import { CardPortion } from "src/components/blog/card";
import Link from "next/link";

const PER_PAGE = 10;

const BlogId: FC = () => {
  const router = useRouter();
  let totalCount = data.length;

  return (
    <div>
      <Layout>
        <div className="mx-auto">
          {data.map((item) => {
            return (
              <Link href={`/blog/${item.id}`} passHref key={item.id}>
                <CardPortion
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  date={item.date}
                ></CardPortion>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-end pb-10">
          <Button color="dark" onClick={() => router.back()}>
            Return
          </Button>
        </div>
        <div className="flex justify-center pb-10">
          <PagenationComponent totalCount={Math.ceil(totalCount / PER_PAGE)} />
        </div>
      </Layout>
    </div>
  );
};

export default BlogId;

// 動的なページを作成
export const getStaticPaths = () => {
  const totalCount = data.length / 10;
  const range = (start: any, end: any) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map((repo) => {
    return `/blog/page/${repo}`;
  });

  return { paths, fallback: false };
};

export async function getStaticProps(context: any) {
  console.log(data);
  return {
    // Passed to the page component as props
    props: {
      blog: data,
      totalCount: data.length,
    },
  };
}
