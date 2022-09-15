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
  const portfolioPage = router.asPath === "/portfolio";
  return (
    <div className="flex min-h-screen w-screen flex-col text-slate-700">
      <HeaderPart inView={inView} />
      <div
        className={`mx-auto flex min-h-screen grow flex-col justify-start ${
          root || portfolioPage ? "" : "max-w-7xl"
        }`}
      >
        {props.children}
      </div>
      <FooterPart />
    </div>
  );
};
