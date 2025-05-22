import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import type { Blog } from "src/types";

export const PortfolioCard: FC<Blog> = (props) => {
  const router = useRouter();
  const root = router.asPath === "/";

  return (
    <Link href={`/portfolio/${props.id}`} legacyBehavior key={props.id}>
      <span>
        <li
          className="nm-list mx-auto cursor-pointer list-none rounded bg-cover bg-top transition-transform delay-200 hover:scale-[98%]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(100,100,333,0.2)), url(${props.eyecatch?.url})`,
          }}
        >
          <div
            className={`relative flex h-96 flex-col px-10 text-right  ${
              root ? "sm:h-[75vh]" : ""
            }`}
          >
            <div className="absolute bottom-0 right-0 w-full bg-black/40 p-3 text-white">
              <div className="text-lg font-bold">{props.title}</div>
              <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
                {props.lead}
              </div>
            </div>
          </div>
        </li>
      </span>
    </Link>
  );
};
