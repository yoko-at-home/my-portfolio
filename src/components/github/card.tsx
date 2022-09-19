import { Image, Text } from "@mantine/core";
import { FC } from "react";

type CardProps = {
  id?: number;
  name: string;
  content: string;
  javascript: string;
  other: string;
  thumbnail: string;
  typescript: string;
};

export const GitHubCard: FC<CardProps> = (props) => {
  return (
    <li key={props.id} className="flex list-none flex-col">
      <div className="min-w-full">
        <div className="text-[22px] font-semibold">{props.name}</div>
        <Text className="overflow-hidden text-ellipsis text-sm line-clamp-2">
          {props.content}
        </Text>
        <div className="my-3 flex justify-start">
          <div className=" mr-3 flex">
            <Image src="/assets/svgs/star.svg" alt="star icon" />{" "}
          </div>
          <div className="flex">
            <Image src="/assets/svgs/fork.svg" alt="star icon" />{" "}
          </div>
        </div>
        <div className="mb-2 flex">
          <span className="h-2 w-[65.5%] rounded-l bg-[#3178C6]"></span>
          <span className="h-2 w-[24.5%] bg-[#F1E05A]"></span>
          <span className="h-2 w-[10%] rounded-r bg-[#EDEDED]"></span>
        </div>
        <div className="flex justify-between text-sm">
          <div>TypeScript {props.typescript}</div>
          <div>JavaScript {props.javascript}</div>
          <div>Other {props.other}</div>
        </div>
      </div>
    </li>
  );
};
