import { Image, Progress, Text } from "@mantine/core";
import { FC } from "react";

type CardProps = {
  id?: number;
  thumbnail: string;
  title: string;
  content: string;
  typescript: string;
  javascript: string;
  other: string;
};

export const CardPortion: FC<CardProps> = (props) => {
  return (
    <li key={props.id} className="flex list-none flex-col">
      <div className="mx-auto max-w-sm">
        <div className="text-[22px] font-semibold">{props.title}</div>
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
        <Progress
          size="xl"
          sections={[
            { value: 65, color: "blue" },
            { value: 30, color: "lime" },
            { value: 5, color: "gray" },
          ]}
        />
        <div className="flex justify-between text-sm">
          <div>TypeScript {props.typescript}</div>
          <div>JavaScript {props.javascript}</div>
          <div>Other {props.other}</div>
        </div>
      </div>
    </li>
  );
};
