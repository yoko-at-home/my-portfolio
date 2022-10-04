import { Button } from "@mantine/core";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
  color: string;
  href: string;
};

export const LinkButton: FC<Props> = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <Button color={props.color}>{props.children}</Button>
    </a>
  );
};
