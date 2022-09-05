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
    <div className="sticky top-0 z-50 items-center">
      <div
        className={`lg:px-46 flex justify-between py-5 px-4 leading-6 ${
          inView ? `` : "top-[0] flex bg-slate-50/60"
        }`}
      >
        <NavMobile />
        <Text size="lg" weight={700}>
          <Link href="/">{metaData.title}</Link>
        </Text>
        <div className="flex leading-6">
          <div className="hidden sm:block">
            <Navigation />
          </div>
          <div className="border-1 border-gray-400">
            <img src="/assets/svgs/night.svg" alt="night mode" />
          </div>
        </div>
      </div>
    </div>
  );
};
