import Link from "next/link";
import { FC } from "react";
import { Blog } from "src/types";

export const PortfolioCard: FC<Blog> = (props) => {
  return (
    <Link href={`/portfolio/${props.id}`}>
      <a>
        <li
          className="relative mx-auto flex h-72 max-w-lg list-none flex-col bg-cover bg-center text-right"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(100,100,333,0.2)),
  url('${props.eyecatch?.url}')`,
          }}
        >
          <div className="absolute bottom-0 right-0 w-full bg-black/40 p-3 text-white">
            <div className="text-lg font-bold">{props.title}</div>
            <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
              {props.lead}
            </div>
          </div>
        </li>
      </a>
    </Link>
  );
};
