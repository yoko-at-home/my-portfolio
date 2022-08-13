import { NextPage } from "next";
import { Layout } from "src/layout";
import { Title } from "src/components/title";
import { Text } from "@mantine/core";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-md px-3">
        <Title>About</Title>
        <Text size="lg" weight={700}>
          Lightsound Shimabu
        </Text>
        <div className="mt-3">
          ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
