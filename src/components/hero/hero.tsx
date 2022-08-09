/* eslint-disable @next/next/no-img-element */
export const Hero = () => {
  return (
    <div className="flex h-[248px] w-screen flex-col justify-around bg-[#E64980] p-4 text-white sm:flex-row sm:items-center">
      <div className="flex flex-col">
        <div className="text-[28px] font-bold leading-7">
          Shimabu IT University
        </div>
        <div className="text-[16px] leading-6">
          しまぶーのポートフォリオのためのページです
        </div>
      </div>
      <div className="flex h-[17px] justify-start">
        <img
          className="mr-2"
          src="/assets/svgs/twitter.svg"
          alt="twitter icon"
        />
        <img
          className="mr-2"
          src="/assets/svgs/facebook.svg"
          alt="facebook icon"
        />
        <img className="" src="/assets/svgs/rss.svg" alt="rss icon" />
      </div>
    </div>
  );
};
