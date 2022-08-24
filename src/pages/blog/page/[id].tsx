import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Button } from "@mantine/core";
import { Layout } from "src/layout";
import { useRouter } from "next/router";
import { PagenationComponent } from "src/components/blog";
import { CardPortion } from "src/components/blog/card";
import Link from "next/link";
import { Blog } from "src/types/types";
import { client } from "src/lib/client";

const PER_PAGE = 10;

const BlogId: NextPage<Blog> = ({ blog, totalCount }) => {
  const router = useRouter();
  return (
    <div>
      <Layout>
        <div className="mx-auto">
          {blog.map((content: any) => {
            return (
              <Link href={`/blog/${content.id}`} passHref key={content.id}>
                <CardPortion
                  id={content.id}
                  key={content.id}
                  title={content.title}
                  createdAt={content.createdAt}
                  lead={content.lead}
                />
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
          <PagenationComponent totalCount={totalCount} />
        </div>
      </Layout>
    </div>
  );
};

// 動的なページを作成
export const getStaticPaths: GetStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blog" });

  const pageNumbers = [];

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.getList<Blog>({
    endpoint: "blog",
    queries: { offset: (id - 1) * 10, limit: 10 },
  });
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
export default BlogId;
