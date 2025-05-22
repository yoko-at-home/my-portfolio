import dayjs from "dayjs";
import Link from "next/link";
import type { FC } from "react";
import type { Blog } from "src/types";

export const BlogCard: FC<Blog> = (props) => {
  return (
    <Link href={`/blog/${props.id}`} legacyBehavior key={props.id}>
      <li className="nm-list mb-8 cursor-pointer list-none rounded from-[#c2c5a7]/10 to-slate-400/10  p-3 hover:bg-gradient-to-r">
        <div className="mb-3 text-lg font-semibold">{props.title}</div>
        <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
          {props.lead}
        </div>
        <div className="pt-2 text-right text-xs">
          {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
        </div>
      </li>
    </Link>
  );
};
