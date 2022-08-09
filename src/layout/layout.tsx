import { FC, ReactNode } from "react";
import { FooterPart } from "src/layout/footer";
import { HeaderPart } from "src/layout/header";

type Body = {
  children: ReactNode;
};

export const Layout: FC<Body> = (props) => {
  return (
    <div className="flex min-h-screen flex-col text-[#25262B]">
      <HeaderPart />
      <div className="flex flex-col grow justify-center">{props.children}</div>
      <FooterPart />
    </div>
  );
};
