import { Text } from "@mantine/core";
import { NextPage } from "next";
import { AppTitle } from "src/components/atom/appTitle";
import { Title } from "src/components/atom/title";
import { Layout } from "src/layout";
import { metaData } from "src/metadata";

const AboutPage: NextPage = () => {
  return (
    <div
      className="bg-black/50 bg-cover bg-top"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(100,100,333,0.9)),
  url('/assets/img/about.webp')`,
      }}
    >
      <Layout>
        <AppTitle title="about" description="about me" />
        <div className="mx-auto max-w-6xl text-white">
          <Title>
            <span className="text-white">About</span>
          </Title>
          <Text size="lg" weight={700}>
            {metaData.name}
          </Text>
          <div className="mt-3">{metaData.description}</div>
        </div>
      </Layout>
    </div>
  );
};

export default AboutPage;
