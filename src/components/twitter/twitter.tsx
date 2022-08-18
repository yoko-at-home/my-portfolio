import { Button } from "@mantine/core";
import { Title } from "src/components/title";
import { data } from "./data";
import { CardPortion } from "src/components/twitter/card";
import { useRouter } from "next/router";
import { useViewportSize } from "src/lib/mantine";
export const TwitterSec = () => {
  const router = useRouter();
  const root = router.asPath === "/";
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }
  const isMobile = width < 600;
  const numberToShow = root ? (isMobile ? 3 : 6) : data.length;
  let filteredData = data.slice(0, numberToShow);
  return (
    <div className="mx-auto px-4 pb-10">
      <Title>Twitter</Title>
      <ul className="gridgrid-cols-1 grid max-w-md">
        <div className="sm:hidden">
          {filteredData.map((item) => {
            return (
              <CardPortion
                key={item.id}
                thumbnail={item.thumbnail}
                content={item.content}
                href={item.href}
                date={item.date}
              />
            );
          })}
        </div>
        <div className="hidden sm:block">
          {data.map((item) => {
            return (
              <CardPortion
                key={item.id}
                thumbnail={item.thumbnail}
                content={item.content}
                href={item.href}
                date={item.date}
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
