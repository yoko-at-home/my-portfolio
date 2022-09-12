import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

type Title = {
  children: ReactNode;
};
export const Title: FC<Title> = (props) => {
  const router = useRouter();
  const root =
    router.asPath === "/" ||
    router.asPath === "/about" ||
    router.asPath === "/blog" ||
    router.asPath === "/portfolio" ||
    router.asPath === "/contact";
  return (
    <div
      className={`my-10 text-[26px] font-bold ${
        root ? "text-[#313335]" : "text-slate-100"
      }`}
    >
      {props.children}
    </div>
  );
};
