import { Image, Card, Text } from "@mantine/core";
import { FC } from "react";

type CardProps = {
  id?: number;
  thumbnail: string;
  title: string;
  content: string;
  date: string;
};

export const CardPortion: FC<CardProps> = (props) => {
  return (
    <li key={props.id} className="mx-auto flex max-w-sm list-none flex-col">
      <Card>
        <a href="">
          <Image src={props.thumbnail} alt={props.title} />
        </a>
        <Text weight={500} size="lg">
          {props.title}
        </Text>
        <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
          {props.content}
        </div>
        <Text size="sm">{props.date}</Text>
      </Card>
    </li>
  );
};
