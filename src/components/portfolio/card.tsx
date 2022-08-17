import { Image, Text } from "@mantine/core";
import Link from "next/link";
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
    <li key={props.id} className="mx-auto flex max-w-lg list-none flex-col">
      <Link href="/portfolio">
        <a>
          <Image src={props.thumbnail} alt={props.title} />
          <Text weight={500} size="lg">
            {props.title}
          </Text>
          <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
            {props.content}
          </div>
          <Text size="sm">{props.date}</Text>
        </a>
      </Link>
    </li>
  );
};
