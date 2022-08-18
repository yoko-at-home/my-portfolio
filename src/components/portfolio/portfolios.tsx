import { useRouter } from "next/router";
import { CardPortion } from "src/components/portfolio/card";
import { Title } from "src/components/title";
import { useViewportSize } from "src/lib/mantine";
import { data } from "./data";

export const Portfolios = () => {
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
    <div className="mx-auto max-w-7xl px-4 pb-10">
      <Title>Portfolio</Title>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item) => {
          return (
            <CardPortion
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              content={item.content}
              date={item.date}
            />
          );
        })}
      </ul>
    </div>
  );
};
