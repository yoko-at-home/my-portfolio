import { Button } from "@mantine/core";
import { useRouter } from "next/router";
import { Title } from "src/components/atom/title";
import { useViewportSize } from "src/lib/mantine";

import { TwitterCard } from "./card";
import { data } from "./data";

export const TwitterSec = () => {
  const router = useRouter();
  const root = router.asPath === "/";
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }
  const isMobile = width < 576;
  const numberToShow = root ? (isMobile ? 3 : 6) : data.length;
  let filteredData = data.slice(0, numberToShow);
  return (
    <div className="mx-auto px-4 pb-10">
      <Title>Twitter</Title>
      <ul className="gridgrid-cols-1 grid max-w-md">
        <div className="sm:hidden">
          {filteredData.map((item) => {
            return (
              <TwitterCard
                key={item.id}
                created_at={item.created_at}
                text={item.text}
                id={item.id}
              />
            );
          })}
        </div>
        <div className="hidden sm:block">
          {data.map((item) => {
            return (
              <TwitterCard
                key={item.id}
                created_at={item.created_at}
                text={item.text}
                id={item.id}
              />
            );
          })}
        </div>
      </ul>

      <div className="flex justify-center py-10">
        <a
          href="https://twitter.com/yokoiwasaki6"
          target="_blank"
          rel="noreferrer"
        >
          <Button color="dark">View on Twitter</Button>
        </a>
      </div>
    </div>
  );
};
