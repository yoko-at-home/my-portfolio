import { Card, Avatar, Text } from "@mantine/core";
import { FC } from "react";

type CardProps = {
  id?: string;
  thumbnail: string;
  title: string;
  account: string;
  content: string;
  href: string;
  date: string;
};

export const CardPortion: FC<CardProps> = (props) => {
  return (
    <li key={props.id} className="mb-2 list-none">
      <Card withBorder>
        <div className="flex">
          <Avatar
            src={props.thumbnail}
            alt={props.title}
            className="mr-3 mt-2"
          />
          <div className="w-full flex-row justify-between">
            <Text weight={500}>
              {props.title}
              <span className="text-sm text-gray-400"> @{props.account}</span>
            </Text>
            <div className="text-sm leading-relaxed">{props.content}</div>
            <a className="text-blue-500 hover:animate-pulse" href={props.href}>
              {props.href}
            </a>
            <div className="text-sm leading-loose">{props.date}</div>
          </div>
        </div>
      </Card>
    </li>
  );
};
