import { Button } from "@mantine/core";
import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { AppTitle } from "src/components/atom/appTitle";
import { Title } from "src/components/atom/title";
import { Layout } from "src/layout";
import { clientBlog } from "src/pages/api/blog";
import { Blog, PropsPath } from "src/types";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  const router = useRouter();
  const imageUrl = props.eyecatch?.url;

  return (
    <div className="relative bg-gradient-to-b from-[#E3FF45]/70 to-[#8D3EAD]/80">
      <div className="translate-x-50 absolute top-7 right-[40%] hidden h-5 w-5 rounded-full bg-slate-400 sm:block" />
      <div className="translate-x-50 absolute top-7 right-[50%] hidden h-5 w-5 rounded-full bg-slate-400 sm:block" />
      <div className="translate-x-50 absolute top-7 right-[60%] hidden h-5 w-5 rounded-full bg-slate-400 sm:block" />
      <Layout>
        <AppTitle title={props.title!} description={props.lead!} />
        <div className="relative mx-auto aspect-video w-full max-w-5xl object-cover">
          <Image src={`${imageUrl}`} alt="画像" layout="fill" />
        </div>

        <div>
          <Title>{props.title}</Title>

          <time
            dateTime={props.publishedAt}
            className="mt-2 block text-slate-100"
          >
            {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
          </time>
          <article
            className="prose-sm mt-8 text-slate-100"
            dangerouslySetInnerHTML={{ __html: props.content! }}
          />
        </div>
        <div className="flex justify-center pb-10">
          <Button color="gray" onClick={() => router.back()}>
            Return
          </Button>
        </div>
      </Layout>
    </div>
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
