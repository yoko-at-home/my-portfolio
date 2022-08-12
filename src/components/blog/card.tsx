import { Card, Text } from "@mantine/core";
import Link from "next/link";
import { FC } from "react";

type CardProps = {
  id: string;
  title: string;
  content: string;
  date: string;
};

export const CardPortion: FC<CardProps> = (props) => {
  return (
    <li key={props.id} className="list-none">
      <Link href={`/blog/${props.id}`}>
        <a>
          <Card>
            <Text size="lg">{props.title}</Text>
            <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
              {props.content}
            </div>
            <Text size="sm" color="dimmed">
              {props.date}
            </Text>
          </Card>
        </a>
      </Link>
    </li>
  );
};
