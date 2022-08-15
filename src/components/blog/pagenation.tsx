import { Button, Pagination } from "@mantine/core";
import Link from "next/link";
import { FC } from "react";
import { data } from "src/components/blog/data";

type pagenationProps = {
  totalCount?: number;
};

export const PagenationComponent: FC<pagenationProps> = (props) => {
  const totalCount = data.length;
  const PER_PAGE = 10;
  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  return (
    <div>
      {range(1, Math.ceil(totalCount / totalCount)).map((number, index) => {
        return (
          <Link href={`/blog/page/${number}`} key={index}>
            <a>
              <Pagination
                total={Math.ceil(totalCount / PER_PAGE)}
                boundaries={1}
                initialPage={1}
                color={"dark"}
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
};
