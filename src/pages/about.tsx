import { NextPage } from "next";
import { Layout } from "src/layout";
import { Title } from "src/components/atom/title";
import { Text } from "@mantine/core";
import { metaData } from "src/metadata";

const AboutPage: NextPage = () => {
  return (
    <div
      className="bg-black/50 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(100,100,333,0.9)),
  url('/assets/img/about.webp')`,
      }}
    >
      <Layout>
        <div className="mx-auto text-white">
          <Title>About</Title>
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
