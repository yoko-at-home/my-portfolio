import { CardPortion } from "src/components/blog/card";
import { Title } from "src/components/title";
import { data } from "./data";

export const BlogSec = () => {
  let filteredForMobile = data.filter((data) => data.id <= 4);

  return (
    <div className="mx-4 pb-10 sm:mx-auto">
      <Title>Blog</Title>
      {filteredForMobile.map((item) => {
        return (
          <CardPortion
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            date={item.date}
          ></CardPortion>
        );
      })}
    </div>
  );
};
