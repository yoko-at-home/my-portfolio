import { Button } from "@mantine/core";
import parse from "html-react-parser";
import type { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppTitle } from "src/components/atom/appTitle";
import { ToTopButton } from "src/components/atom/pageTop";
import { Title } from "src/components/atom/title";
import { LinkButton } from "src/components/button";
import { Layout } from "src/layout";
import { metaData } from "src/metadata";
import { client } from "src/pages/api/portfolio/client";
import type { Blog, PropsPath } from "src/types";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const PortfolioId: NextPage<Props> = (props) => {
  const router = useRouter();
  const imageUrl = props.eyecatch?.url ?? "";
  return (
    <div className="relative z-0" id="page-top">
      <div className="translate-x-50 absolute top-7 right-[40%] hidden h-5 w-5 rounded-full bg-slate-400 sm:block" />
      <div className="translate-x-50 absolute top-7 right-[50%] hidden h-5 w-5 rounded-full bg-slate-400 sm:block" />
      <div className="translate-x-50 absolute top-7 right-[60%] hidden h-5 w-5 rounded-full bg-slate-400 sm:block" />

      <Layout>
        <AppTitle
          title={props.title ?? ""}
          description={props.lead ?? ""}
          ImageUrl={imageUrl}
          ogUrl={metaData.siteUrl + router.pathname}
        />

        <div className="mx-auto w-full">
          <div className="relative mx-auto aspect-video object-cover">
            <Link href={props.url ?? ""} legacyBehavior>
              <a href={props.url ?? ""} target="_blank" rel="noreferrer">
                <Image src={imageUrl} alt="画像" layout="fill" />
              </a>
            </Link>
          </div>
        </div>
        <div className="mx-auto w-screen max-w-md sm:max-w-full">
          <Title>{props.title}</Title>
          <article className="text-gradient-sub mt-8 whitespace-pre-line">
            {parse(props.content ?? "")}
          </article>
        </div>
        <div className="flex flex-col justify-around py-10 sm:flex-row">
          <LinkButton href={props.url ?? ""} color="grape">
            Visit {props.title} Website
          </LinkButton>
          <div className="text-center">
            <Button color="gray" onClick={() => router.back()}>
              Return
            </Button>
          </div>
        </div>
        <ToTopButton />
      </Layout>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<PropsPath> = async () => {
  const data = await client.getList<Blog>({
    endpoint: "portfolio",
    queries: { limit: 100, offset: 0 },
  });
  const ids = data.contents.map((content) => `/portfolio/${content.id}`);
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

  const data = await client.getListDetail<Blog>({
    contentId: ctx.params.id,
    endpoint: "portfolio",
    queries: { limit: 100, offset: 0 },
  });

  return {
    props: data,
  };
};

export default PortfolioId;
