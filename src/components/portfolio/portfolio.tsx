import { CardPortion } from "src/components/portfolio/card";
import { Title } from "src/components/title";
import { data } from "./data";

export const PortfolioSec = () => {
  let filteredForMobile = data.filter((data) => data.id < 4);
  return (
    <div className="mx-auto max-w-7xl px-4 pb-10">
      <Title>Portfolio</Title>
      <ul className="grid grid-cols-1 gap-3 md:hidden">
        {filteredForMobile.map((item) => {
          return (
            <CardPortion
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              content={item.content}
              date={item.date}
            />
          );
        })}
      </ul>
      <ul className="hidden grid-cols-1 gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => {
          return (
            <CardPortion
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              content={item.content}
              date={item.date}
            />
          );
        })}
      </ul>
    </div>
  );
};
