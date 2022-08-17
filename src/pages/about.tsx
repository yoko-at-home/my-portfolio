import { NextPage } from "next";
import { Layout } from "src/layout";
import { Title } from "src/components/title";
import { Text } from "@mantine/core";
import { metaData } from "src/metadata";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <div className="mx-auto">
        <Title>About</Title>
        <Text size="lg" weight={700}>
          Lightsound Shimabu
        </Text>
        <div className="mt-3">{metaData.description}</div>
      </div>
    </Layout>
  );
};

export default AboutPage;
