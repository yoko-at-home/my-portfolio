import { FC, ReactNode } from "react";
import { FooterPart } from "src/layout/footer";
import { HeaderPart } from "src/layout/header";

type Body = {
  children: ReactNode;
};

export const Layout: FC<Body> = (props) => {
  return (
    <div>
      <HeaderPart />
      <div>{props.children}</div>
      <FooterPart />
    </div>
  );
};
