import { useRouter } from "next/router";
import { CardPortion } from "src/components/blog/card";
import { Title } from "src/components/title";
import { useViewportSize } from "src/lib/mantine";
import { data } from "./data";

export const Blogs = () => {
  const router = useRouter();
  const root = router.asPath === "/";
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }
  const isMobile = width < 600;

  const numberToShow = root ? (isMobile ? 4 : 6) : data.length;
  let filteredData = data.slice(0, numberToShow);

  return (
    <div className="pb-10 sm:mx-auto">
      <Title>Blog</Title>
      {filteredData.map((item) => {
        return (
          <CardPortion
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            date={item.date}
          ></CardPortion>
        );
      })}
    </div>
  );
};
