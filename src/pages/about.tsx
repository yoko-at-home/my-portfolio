import { Text } from "@mantine/core";
import { loadDefaultJapaneseParser } from "budoux";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { AppTitle } from "src/components/atom/appTitle";
import { FireworksComponent } from "src/components/atom/fireworks";
import { Title } from "src/components/atom/title";
import { TimeLine } from "src/components/history";
import { Layout } from "src/layout";
import { metaData } from "src/metadata";

const AboutPage: NextPage = () => {
  const router = useRouter();

  const parser = loadDefaultJapaneseParser();
  return (
    <div
      className="bg-black/50 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(100,100,333,0.9)),
  url('/assets/img/about.webp')`,
      }}
    >
      <Layout>
        <AppTitle
          title="About Yoko 🐈 "
          description={metaData.description_0}
          ImageUrl={metaData.siteUrl + metaData.siteLogo}
          ogUrl={metaData.siteUrl + router.pathname}
        />
        <div className="w-screen text-white ">
          <Title>
            <span className="text-white">About</span>
          </Title>
          <Text size="lg" weight={700}>
            {metaData.name}
          </Text>
          <div className="mt-3">{parser.parse(metaData.description_0)}</div>
          <div className="mt-3">{parser.parse(metaData.description_1)}</div>
          <div className="mt-3">
            過去の活動や作品をまとめております。ご参照くださいませ。
          </div>
        </div>
        <TimeLine />
        <div className="opacity-50">
          <FireworksComponent />
        </div>
      </Layout>
      $
    </div>
  );
};

export default AboutPage;
