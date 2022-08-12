import { Button, Card, Image, Text } from "@mantine/core";
import Link from "next/link";
import { Title } from "src/components/title";
import { data } from "./data";
export const PortfolioSec = () => {
  return (
    <div className="pb-10">
      <Title>Portfolio</Title>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:px-3 lg:grid-cols-3">
        {data.map((item) => {
          return (
            <li
              key={item.id}
              className="mx-auto flex max-w-sm list-none flex-col"
            >
              <Card>
                <a href="">
                  <Image src={item.thumbnail} alt={item.title} />
                </a>
                <Text weight={500} size="lg">
                  {item.title}
                </Text>
                <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
                  {item.content}
                </div>
                <Text size="sm">{item.date}</Text>
              </Card>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center  py-10">
        <Link href="/portfolio">
          <Button color="dark">View All</Button>
        </Link>
      </div>
    </div>
  );
};
