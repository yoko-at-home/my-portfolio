import { Button, Image } from "@mantine/core";
import { Title } from "src/components/title";
import { data } from "./data";
export const TwitterSec = () => {
  return (
    <div className="pb-10">
      <Title>Twitter</Title>
      <ul className="gridgrid-cols-1 mx-auto grid max-w-sm">
        {data.map((item) => {
          return (
            <li key={item.id} className="mb-3 flex list-none">
              <Image
                src={item.thumbnail}
                alt={item.title}
                className="mr-3 mt-2 h-[38px] w-[38px]"
              />
              <div className="w-full flex-row justify-between">
                <div className="text-[22px]">
                  {item.title}
                  <span className="text-sm text-gray-400">@{item.account}</span>
                </div>
                <div className="overflow-hidden text-ellipsis text-sm line-clamp-2">
                  {item.content}
                </div>
                <div className="text-sm">{item.date}</div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center">
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
