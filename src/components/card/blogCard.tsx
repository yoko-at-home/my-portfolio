import dayjs from "dayjs";
import Link from "next/link";
import { FC } from "react";
import { Blog } from "src/types";

export const BlogCard: FC<Blog> = (props) => {
  return (
    <Link href={`/blog/${props.id}`} passHref key={props.id}>
      <li className="mb-5 list-none hover:bg-gray-100">
        <div className="text-lg font-semibold">{props.title}</div>
        <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
          {props.lead}
        </div>
        <div className="pt-2 text-xs">
          {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
        </div>
      </li>
    </Link>
  );
};
