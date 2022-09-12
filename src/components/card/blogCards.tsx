import { MicroCMSListResponse } from "microcms-js-sdk";
import { Blog } from "src/types";

import { BlogCard } from "./blogCard";

export const BlogCards = ({
  items,
}: {
  items: MicroCMSListResponse<Blog>["contents"];
}) => {
  return (
    <ul className="my-16 flex min-h-fit flex-col justify-center">
      {items.map((item) => {
        return <BlogCard {...item} key={item.id} />;
      })}
    </ul>
  );
};
