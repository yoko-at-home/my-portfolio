/* eslint-disable @next/next/no-img-element */
export const Hero = () => {
  return (
    <div className="flex h-[248px] w-screen flex-col justify-around bg-[#E64980] p-4 text-white sm:flex-row">
      <div className="">
        <div className="text-[28px] font-bold leading-7">
          Shimabu IT University
        </div>
        <div className="text-[16px] leading-6">
          しまぶーのポートフォリオのためのページです
        </div>
      </div>
      <div className="flex w-1/5 justify-between">
        <img src="/assets/svgs/twitter.svg" alt="twitter icon" />
        <img src="/assets/svgs/facebook.svg" alt="facebook icon" />
        <img src="/assets/svgs/feed.svg" alt="feed icon" />
      </div>
    </div>
  );
};
