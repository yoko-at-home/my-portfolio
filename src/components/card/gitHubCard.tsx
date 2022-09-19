import { Image, Text } from "@mantine/core";
import { FC } from "react";
import { GitHubCardProps } from "src/types";

export const GitHubCard: FC<GitHubCardProps> = (props) => {
  return (
    <li key={props.id} className="mb-5 flex list-none flex-col sm:mb-8">
      <div className="min-w-full">
        <a key={props.id} href={props.url} target="_blank" rel="noreferrer">
          <div className="text-gradient text-[22px] font-semibold hover:text-[#CF1512]">
            {props.name}
          </div>
        </a>
        <Text className="text-gradient overflow-hidden text-ellipsis text-sm">
          {props.description}
        </Text>
        <div className="my-3 flex justify-start">
          <div className="mr-8 flex">
            <Image src="/assets/svgs/star.svg" alt="star icon" />
            <span>{props.stargazers.totalCount}</span>
          </div>
          <div className="flex">
            <Image src="/assets/svgs/fork.svg" alt="star icon" />
            <span>{props.forkCount}</span>
          </div>
        </div>
        <div className="mb-2 flex">
          <span className="h-2 w-[65.5%] rounded-l bg-[#3178c6]"></span>
          <span className="h-2 w-[24.5%] bg-[#f1e05a]"></span>
          <span className="h-2 w-[10%] rounded-r bg-[#EDEDED]"></span>
        </div>
        <div className="flex justify-between text-sm">
          <div>{props.primaryLanguage.name} 65.5%</div>
          <div>JavaScript 24.5%</div>
          <div>Other 10%</div>
        </div>
      </div>
    </li>
  );
};
