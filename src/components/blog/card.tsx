import { Text } from "@mantine/core";
import Link from "next/link";
import { FC } from "react";

type CardProps = {
  id?: string;
  title: string;
  content: string;
  date: string;
};

export const CardPortion: FC<CardProps> = (props) => {
  return (
    <li
      key={props.id}
      className="mb-3 list-none hover:bg-gray-100 hover:text-green-600"
    >
      <Link href={`/blog/${props.id}`}>
        <a>
          <Text size="lg">{props.title}</Text>
          <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
            {props.content}
          </div>
          <Text size="sm" color="dimmed">
            {props.date}
          </Text>
        </a>
      </Link>
    </li>
  );
};
