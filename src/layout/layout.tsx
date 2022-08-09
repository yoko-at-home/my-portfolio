import { FC, ReactNode } from "react";
import { FooterPart } from "src/layout/footer";
import { HeaderPart } from "src/layout/header";

type Body = {
  children: ReactNode;
};

export const Layout: FC<Body> = (props) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr]">
      <HeaderPart />
      <div>{props.children}</div>
      <FooterPart />
    </div>
  );
};
