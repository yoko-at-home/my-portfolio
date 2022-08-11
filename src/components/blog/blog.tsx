import { Button } from "@mantine/core";
import Link from "next/link";
import { Title } from "src/components/title";
import { data } from "./data";
export const BlogSec = () => {
  return (
    <div className="pb-10 mx-4 sm:mx-auto">
      <Title>Blog</Title>
      {data.map((item) => {
        return (
          <li key={item.id} className="list-none">
            <div className="text-[22px]">{item.title}</div>
            <div className="line-clamp-2 overflow-hidden text-ellipsis text-sm">
              {item.content}
            </div>
            <div className="text-sm">{item.date}</div>
          </li>
        );
      })}
      <div className="flex justify-center py-10">
        <Link href="/blog">
        <Button color="dark">View All</Button>
        </Link>
      </div>
    </div>
  );
};
