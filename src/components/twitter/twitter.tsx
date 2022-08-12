import { Button } from "@mantine/core";
import { useViewportSize } from "src/lib/mantine/useViewportSize";
import { Title } from "src/components/title";
import { data } from "./data";
import { CardPortion } from "src/components/twitter/card";
export const TwitterSec = () => {
  const width = useViewportSize();

  return (
    <div className="pb-10">
      <Title>Twitter</Title>
      <ul className="gridgrid-cols-1 mx-auto grid max-w-md">
        {data.map((item) => {
          return (
            <CardPortion
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              account={item.account}
              content={item.content}
              href={item.href}
              date={item.date}
            />
          );
        })}
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
