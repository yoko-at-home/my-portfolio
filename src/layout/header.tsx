/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CSSProperties } from "react";
import { Navigation, NavMobile } from "src/layout/navigation";
import { Text } from "@mantine/core";

type Props = {
  inView: boolean;
  className?: CSSProperties;
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
          <Link href="/">Shimabu IT University</Link>
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
