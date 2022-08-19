/* eslint-disable @next/next/no-img-element */
import { Button } from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "src/layout";
import { metaData } from "src/metadata";

const PortfolioContent: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <img
        src="https://source.unsplash.com/random?q=60"
        alt="画像"
        className="aspect-video w-full object-cover"
      />
      <div className="my-4 text-xl font-bold text-gray-900">
        {metaData.name}
      </div>
      <p className="mb-4 text-xs font-bold text-gray-400">2021.10 - 2021.12</p>
      <p
        className="my-2 text-gray-900"
        dangerouslySetInnerHTML={{
          __html: `${metaData.description}`,
        }}
      />
      <div className="flex justify-center py-10">
        <Button color="dark" onClick={() => router.back()}>
          Return
        </Button>
      </div>
    </Layout>
  );
};

export default PortfolioContent;
