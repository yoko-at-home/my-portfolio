import { Button } from "@mantine/core";
import { Title } from "src/components/title";
import { data } from "./data";
import { CardPortion } from "src/components/twitter/card";
export const TwitterSec = () => {
  let filteredForMobile = data.filter((data) => data.id > "3");
  return (
    <div className="pb-10">
      <Title>Twitter</Title>
      <ul className="gridgrid-cols-1 mx-auto grid max-w-md">
        <div className="sm:hidden">
          {filteredForMobile.map((item) => {
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
        </div>
        <div className="hidden sm:block">
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
