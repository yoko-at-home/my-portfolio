import { Button } from "@mantine/core";
import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Title } from "src/components/atom/title";
import { Layout } from "src/layout";
import { clientBlog } from "src/pages/api/blog/clientBlog";
import { Blog, PropsPath } from "src/types";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  const router = useRouter();
  const imageUrl = props.eyecatch?.url;

  return (
    <Layout>
      <div className="relative aspect-video w-full object-cover">
        <Image src={`${imageUrl}`} alt="画像" layout="fill" />
      </div>

      <div>
        <Title>{props.title}</Title>

        <time dateTime={props.publishedAt} className="mt-2 block">
          {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
        </time>
        <article
          className="prose-sm mt-8"
          dangerouslySetInnerHTML={{ __html: props.content! }}
        />
      </div>
      <div className="flex justify-center pb-10">
        <Button color="dark" onClick={() => router.back()}>
          Return
        </Button>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<PropsPath> = async () => {
  const data = await clientBlog.getList<Blog>({
    endpoint: "blog",
    queries: { limit: 100, offset: 0 },
  });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    fallback: false,
    paths: ids,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }

  const data = await clientBlog.getListDetail<Blog>({
    contentId: ctx.params.id,
    endpoint: "blog",
    queries: { limit: 100, offset: 0 },
  });

  return {
    props: data,
  };
};

export default BlogId;
