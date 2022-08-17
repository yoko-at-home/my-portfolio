import { FC, ReactNode } from "react";
import { FooterPart } from "src/layout/footer";
import { HeaderPart } from "src/layout/header";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

type Body = {
  children: ReactNode;
  inView?: boolean;
};

export const Layout: FC<Body> = (props) => {
  const { inView } = useInView({ threshold: 0 });
  const router = useRouter();
  const root = router.asPath === "/";
  return (
    <div className="flex min-h-screen flex-col text-[#25262B]">
      <HeaderPart inView={inView} />
      <div
        className={`mx-auto flex grow flex-col justify-start ${
          root ? "" : "max-w-7xl px-4"
        }`}
      >
        {props.children}
      </div>
      <FooterPart />
    </div>
  );
};
