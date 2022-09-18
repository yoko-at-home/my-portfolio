import { Button } from "@mantine/core";
import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { AppTitle } from "src/components/atom/appTitle";
import { ToTopButton } from "src/components/atom/pageTop";
import { Title } from "src/components/atom/title";
import { Layout } from "src/layout";
import { metaData } from "src/metadata";
import { clientBlog } from "src/pages/api/blog";
import { Blog, PropsPath } from "src/types";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  const router = useRouter();
  const imageUrl = props.eyecatch?.url!;

  return (
    <div className="relative">
      <div className="translate-x-50 absolute top-7 right-[40%] hidden h-5 w-5 rounded-full bg-slate-400 sm:block" />
      <div className="translate-x-50 absolute top-7 right-[50%] hidden h-5 w-5 rounded-full bg-slate-400 sm:block" />
      <div className="translate-x-50 absolute top-7 right-[60%] hidden h-5 w-5 rounded-full bg-slate-400 sm:block" />
      <Layout>
        <AppTitle
          title={props.title!}
          description={props.lead!}
          ogUrl={metaData.siteUrl + router.asPath}
          url={imageUrl}
        />
        <div className="mx-auto w-full" id="page-top">
          <div className="relative mx-auto aspect-video object-cover">
            <Image src={`${imageUrl}`} alt="画像" layout="fill" />
          </div>
        </div>
        <div className="whitespace-wrap mx-auto w-screen max-w-md overflow-x-auto break-all px-4 sm:max-w-full sm:break-words">
          <Title>{props.title}</Title>

          <time
            dateTime={props.publishedAt}
            className="text-gradient-sub mt-2 block "
          >
            {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
          </time>
          <article
            className="text-gradient-sub mt-8 break-all"
            dangerouslySetInnerHTML={{ __html: props.content! }}
          />
        </div>
        <div className="flex justify-center py-10">
          <Button color="gray" onClick={() => router.back()}>
            Return
          </Button>
        </div>
        <ToTopButton />
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
