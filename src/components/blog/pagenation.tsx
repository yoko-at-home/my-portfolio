import { Pagination } from "@mantine/core";
import { FC } from "react";
import { data } from "src/components/blog/data";

type pagenationProps = {
  onClick?: () => void;
};

export const PagenationComponent: FC<pagenationProps> = () => {
  const pagenationTotal = Math.ceil(data.length / 10);
  const handleOnClick = (e: any) => {
    e?.preventDefault();
    alert("clicked");
  };

  return (
    <div>
      <Pagination
        total={pagenationTotal}
        color="dark"
        withEdges
        initialPage={1}
        onClick={handleOnClick}
      />
    </div>
  );
};
