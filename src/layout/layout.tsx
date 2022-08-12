import { FC, ReactNode } from "react";
import { FooterPart } from "src/layout/footer";
import { HeaderPart } from "src/layout/header";
import { useInView } from "react-intersection-observer";

type Body = {
  children: ReactNode;
  inView?: boolean;
};

export const Layout: FC<Body> = (props) => {
  const { inView } = useInView({ threshold: 0 });
  return (
    <div className="flex min-h-screen flex-col text-[#25262B]">
      <HeaderPart inView={inView} />
      <div className="flex grow flex-col justify-start">{props.children}</div>
      <FooterPart />
    </div>
  );
};
