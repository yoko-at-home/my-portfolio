import { Button } from "@mantine/core";
import { Title } from "src/components/title";
import { data } from "./data";
export const Blog = () => {
  return (
    <div className="pb-10">
      <Title>Blog</Title>
      {data.map((item) => {
        return (
          <li key={item.id} className=" list-none ">
            <div className="text-[22px]">{item.title}</div>
            <div className="line-clamp-2 overflow-hidden text-ellipsis text-sm">
              {item.content}
            </div>
            <div className="text-sm">{item.date}</div>
          </li>
        );
      })}
      <div className="flex justify-center">

      <Button color="dark">View All</Button>
      </div>
    </div>
  );
};
