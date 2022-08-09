/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CSSProperties } from "react";
import { Navigation, NavMobile } from "src/layout/navigation";

type Props = {
  inView: boolean;
  className?: CSSProperties;
};

export const HeaderPart = ({ inView }: Props) => {
  return (
    <div className="sticky top-0 z-50">
      <div
        className={
          inView
            ? "flex justify-around py-5 leading-6"
            : "top-[0] flex justify-around bg-slate-50/60 py-5 leading-6"
        }
      >
        <NavMobile />
        <div className="text-[18px] font-bold">
          <Link href="/">Shimabu IT University</Link>
        </div>
        <div className="flex leading-6">
          <div className="hidden sm:block">
            <Navigation />
          </div>
          <div className="border-1 border-gray-400 pt-1">
            <img src="/assets/svgs/night.svg" alt="night mode" />
          </div>
        </div>
      </div>
    </div>
  );
};
