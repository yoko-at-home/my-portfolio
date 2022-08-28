import { Button } from "@mantine/core";
import { Layout } from "src/layout";
import { useRouter } from "next/router";
import { Pagenation } from "src/components/pagination";
import Link from "next/link";
import { clientBlog } from "src/pages/api/clientBlog";
import { BlogProps2 } from "src/types/types";
import { GetStaticProps, NextPage } from "next";
import { BlogCard } from "src/components/card";

const PER_PAGE = 5;

const BlogId: NextPage<BlogProps2> = (props) => {
  const router = useRouter();
  return (
    <div>
      <Layout>
        <div className="flex justify-end py-10">
          {`記事の総数：${props.totalCount}`}
        </div>

        <div className="mx-auto">
          {props.blogData.map((content: any) => {
            return (
              <li className="mb-5 list-none hover:bg-gray-100" key={content.id}>
                <Link href={`/blog/${content.id}`} passHref>
                  <a>
                    <BlogCard
                      key={content.id}
                      title={content.title}
                      createdAt={content.createdAt}
                      lead={content.lead}
                    />
                  </a>
                </Link>
              </li>
            );
          })}
        </div>
        <div className="flex justify-end pb-10">
          <Button color="dark" onClick={() => router.back()}>
            Return
          </Button>
        </div>
        <div className="flex justify-center pb-10">
          <Pagenation totalCount={props.totalCount} />
        </div>
      </Layout>
    </div>
  );
};

export const getStaticPaths = async () => {
  const repos = await clientBlog.get({ endpoint: "blog" });

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps: GetStaticProps = async (context) => {
  // @ts-ignore
  const id = context.params.id;

  const data = await clientBlog.get({
    endpoint: "blog",
    // @ts-ignore
    queries: { offset: (id - 1) * 5, limit: 5 },
  });

  return {
    props: {
      blogData: data,
      totalCount: data,
    },
  };
};
export default BlogId;
