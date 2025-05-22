import { Button } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";

type Props = {
  children: React.ReactNode;
  color: string;
  href: string;
};

export const LinkButton: FC<Props> = (props) => {
  return (
    <Link href={props.href} legacyBehavior>
      <Button
        color={props.color}
        component="a"
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </Button>
    </Link>
  );
};
