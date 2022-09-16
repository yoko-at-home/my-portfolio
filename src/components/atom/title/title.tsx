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
    <h1
      className={`my-10 text-[26px] font-bold lg:text-4xl ${
        root ? "text-[#45515d]" : "text-gradient-sub"
      }`}
    >
      {props.children}
    </h1>
  );
};
