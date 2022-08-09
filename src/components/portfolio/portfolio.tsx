import { Button, Image } from "@mantine/core";
import { Title } from "src/components/title";
import { data } from "./data";
export const PortfolioSec = () => {
  return (
    <div className="pb-10">
      <Title>Portfolio</Title>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:px-3 lg:grid-cols-3">

      {data.map((item) => {
        return (
          <li key={item.id} className="list-none flex flex-col">
            <div className="max-w-sm  mx-auto">
            <Image src={item.thumbnail} alt={item.title} width="358px" />
            <div className="text-[22px]">{item.title}</div>
            <div className="line-clamp-2 overflow-hidden text-ellipsis text-sm">
              {item.content}
            </div>
            <div className="text-sm">{item.date}</div>
            </div>
          </li>
        );
      })}
            </ul>
      <div className="flex justify-center">

      <Button color="dark">View All</Button>
      </div>
    </div>
  );
};
