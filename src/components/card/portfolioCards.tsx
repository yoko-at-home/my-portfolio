import { MicroCMSListResponse } from "microcms-js-sdk";
import { PortfolioCard } from "src/components/card/portfolioCard";
import { Blog } from "src/types";

export const PortfolioCards = ({
  items,
}: {
  items: MicroCMSListResponse<Blog>["contents"];
}) => {
  return (
    <div className="relative w-screen max-w-7xl">
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          return <PortfolioCard {...item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};
