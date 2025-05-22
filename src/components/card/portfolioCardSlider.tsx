// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import type { MicroCMSListResponse } from "microcms-js-sdk";
import type { Blog } from "src/types";
// import required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { PortfolioCard } from "./portfolioCard";

export const PortfolioCardSlider = ({
  items,
}: {
  items: MicroCMSListResponse<Blog>["contents"];
}) => {
  return (
    <ul className="mx-auto w-[85vw] sm:w-[75vw]">
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mx-5 py-16 sm:py-20"
      >
        {items.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="flex flex-col justify-start sm:justify-center"
            >
              <PortfolioCard {...item} key={item.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ul>
  );
};
