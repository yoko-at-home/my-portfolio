import { Button } from "@mantine/core";
import { CardPortion } from "src/components/github/card";
import { Title } from "src/components/title";
import { metaData } from "src/metadata";
import { data } from "./data";
export const GitHubSec = () => {
  let filteredForMobile = data.filter((data) => data.id < 4);
  return (
    <div className="px-4 pb-10">
      <Title>GitHub</Title>
      <ul className="flex flex-col">
        <div className="sm:hidden">
          {filteredForMobile.map((item) => {
            return (
              <CardPortion
                key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                content={item.content}
                typescript={item.typescript}
                javascript={item.javascript}
                other={item.other}
              />
            );
          })}
        </div>
        <div className="hidden sm:block">
          {data.map((item) => {
            return (
              <CardPortion
                key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                content={item.content}
                typescript={item.typescript}
                javascript={item.javascript}
                other={item.other}
              />
            );
          })}
        </div>
      </ul>
      <div className="mt-6 flex justify-center  py-10">
        <a href={metaData.github} target="_blank" rel="noreferrer">
          <Button color="dark">View on GitHub</Button>
        </a>
      </div>
    </div>
  );
};
