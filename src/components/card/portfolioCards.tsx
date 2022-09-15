import { MicroCMSListResponse } from "microcms-js-sdk";
import { Blog } from "src/types";

import { PortfolioCard } from "./portfolioCard";

export const PortfolioCards = ({
  items,
}: {
  items: MicroCMSListResponse<Blog>["contents"];
}) => {
  return (
    <ul className="grid grid-cols-1 justify-center gap-3 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        return <PortfolioCard {...item} key={item.id} />;
      })}
    </ul>
  );
};
