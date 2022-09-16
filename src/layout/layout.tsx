import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { FooterPart } from "src/layout/footer";
import { HeaderPart } from "src/layout/header";

type Body = {
  children: ReactNode;
  inView?: boolean;
};

export const Layout: FC<Body> = (props) => {
  const { inView } = useInView({ threshold: 0 });
  const router = useRouter();
  const root = router.asPath === "/";
  return (
    <div className="bg-[#f0ebeb]/02 flex min-h-screen w-screen flex-col text-slate-700">
      <HeaderPart inView={inView} />
      <div
        className={`flex min-h-screen grow flex-col justify-start sm:mx-auto ${
          root ? "" : "max-w-7xl px-4"
        }`}
      >
        {props.children}
      </div>
      <FooterPart />
    </div>
  );
};
