import { metaData } from "src/metadata";

/* eslint-disable @next/next/no-img-element */
export const Hero = () => {
  return (
    <div
      className="w-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(207, 212, 220,0.8)),
  url('/assets/img/')`,
      }}
    >
      <div className="flex h-[248px] max-w-7xl flex-col justify-around p-4 sm:mx-auto sm:flex-row sm:items-center sm:justify-between md:pr-20 lg:pr-36">
        <div className="flex flex-col">
          <div className="text-[28px] font-bold leading-7">
            {metaData.title.toLocaleUpperCase()}
          </div>
          <div className="pt-1 text-[16px] leading-6 ">{metaData.lead}</div>
        </div>
        <div className="flex h-[17px] justify-start">
          <a
            href="https://twitter.com/yokoiwasaki6"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mr-2"
              src="/assets/svgs/twitter.svg"
              alt="twitter icon"
            />
          </a>
          <img
            className="mr-2"
            src="/assets/svgs/facebook.svg"
            alt="facebook icon"
          />
          <img className="" src="/assets/svgs/rss.svg" alt="rss icon" />
        </div>
      </div>
    </div>
  );
};
