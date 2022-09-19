import { Button } from "@mantine/core";
import { FC } from "react";
import { Title } from "src/components/atom/title";
import { metaData } from "src/metadata";
import { GitHubCardProps } from "src/types";

import { GitHubCard } from "./gitHubCard";

type Props = {
  pinnedItems: [] & GitHubCardProps;
};
export const GitHubReps: FC<Props> = (props) => {
  return (
    <div className="nm-container mx-auto px-4 pb-10 sm:px-10">
      <Title>GitHub</Title>
      <ul className="grid grid-cols-1 sm:w-96">
        <div className="">
          {props.pinnedItems.map((item: any) => {
            return (
              <GitHubCard
                key={item.id}
                name={item.name}
                description={item.description}
                stargazers={{ totalCount: 0 }}
                id={item.id}
                url={item.url}
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
