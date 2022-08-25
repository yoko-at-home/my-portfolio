import type {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  PreviewData,
} from "next";
import { Button } from "@mantine/core";
import { Layout } from "src/layout";
import { useRouter } from "next/router";
import { Pagenation } from "src/components/pagination";
import Link from "next/link";
import { Blog, BlogProps } from "src/types/types";
import { client } from "src/lib/client";
import { ParsedUrlQuery } from "querystring";
import dayjs from "dayjs";

const PER_PAGE = 5;

const BlogId: NextPage<BlogProps> = (props) => {
  console.log(props);

  const router = useRouter();
  return (
    <div>
      <Layout>
        <div className="flex justify-end py-10">
          {`記事の総数：${props.totalCount}`}
        </div>

        <div className="mx-auto">
          {props.blog.map((content) => {
            return (
              <li className="mb-5 list-none hover:bg-gray-100" key={content.id}>
                <Link href={`/blog/${content.id}`} passHref>
                  <a>
                    <div className="text-lg font-semibold">{content.title}</div>
                    <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
                      {content.lead}
                    </div>
                    <div className="pt-2 text-xs">
                      {dayjs(content.publishedAt).format("YYYY年MM月DD日")}
                    </div>
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

// 動的なページを作成
export const getStaticPaths: GetStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blog" });
  console.log(repos);

  const pageNumbers = [];

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得

export const getStaticProps: GetStaticProps<
  BlogProps,
  ParsedUrlQuery,
  PreviewData
> = async (context: any) => {
  const id = context.params.id;
  const data = await client.getList<Blog | ParsedUrlQuery | PreviewData>({
    endpoint: "blog",
    queries: { offset: (id - 1) * 5, limit: 5 },
  });
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
export default BlogId;
