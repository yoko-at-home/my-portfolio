import { Pagination } from "@mantine/core";
import Link from "next/link";
import { FC } from "react";
import { Blog } from "src/types/types";

export const Pagenation: FC<Blog> = (props) => {
  const PER_PAGE = 5;
  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  return (
    <div>
      {range(1, Math.ceil(props.totalCount! / PER_PAGE)).map(
        (number, index) => {
          return (
            <Link href={`/blog/page/${number}`} key={index}>
              <a>
                <Pagination
                  total={Math.ceil(props.totalCount! / PER_PAGE)}
                  boundaries={1}
                  initialPage={1}
                  color={"dark"}
                />
              </a>
              {/* <a className="mr-3 rounded bg-gray-500 p-3 text-gray-300  sm:px-4">
                {number}
              </a> */}
            </Link>
          );
        }
      )}
    </div>
  );
};
