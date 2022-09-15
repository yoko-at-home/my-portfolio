/* eslint-disable @next/next/no-img-element */
import { Text } from "@mantine/core";
import Link from "next/link";
import { CSSProperties } from "react";
import { Navigation, NavMobile } from "src/layout/navigation";
import { metaData } from "src/metadata";

type Props = {
  className?: CSSProperties;
  inView: boolean;
};

export const HeaderPart = ({ inView }: Props) => {
  return (
    <div className="z-5 sticky top-0 items-center">
      <div
        className={`mx-auto flex w-screen justify-between py-5 leading-6 ${
          inView ? `` : "top-[0] flex bg-slate-50/60"
        }`}
      >
        <NavMobile />
        <div className="pl-5">
          <Text size="lg" weight={700}>
            <Link href="/">{metaData.title}</Link>
          </Text>
        </div>
        <div className="flex leading-6">
          <div className="hidden sm:block">
            <Navigation />
          </div>
          <div className="border-1 border-gray-400 pr-4">
            <img src="/assets/svgs/night.svg" alt="night mode" />
          </div>
        </div>
      </div>
    </div>
  );
};
