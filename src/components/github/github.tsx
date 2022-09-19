import { Button } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useRouter } from "next/router";
import { Title } from "src/components/atom/title";
import { metaData } from "src/metadata";

import { GitHubCard } from "./card";
import { data } from "./data";

export const GitHubReps = () => {
  const router = useRouter();
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }

  const isMobile = width < 576;
  const numberToShow = isMobile ? 3 : 6;
  let filteredData = data.slice(0, numberToShow);
  return (
    <div className="nm-container mx-auto px-4 pb-10 sm:px-10">
      <Title>GitHub</Title>
      <ul className="grid grid-cols-1 sm:w-96">
        <div className="">
          {filteredData.map((item) => {
            return (
              <GitHubCard
                key={item.id}
                thumbnail={item.thumbnail}
                name={item.name}
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
