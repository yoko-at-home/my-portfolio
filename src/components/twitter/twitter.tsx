import { Button, Card, Image, Text } from "@mantine/core";
import { Title } from "src/components/title";
import { data } from "./data";
export const TwitterSec = () => {
  return (
    <div className="pb-10">
      <Title>Twitter</Title>
      <ul className="gridgrid-cols-1 mx-auto grid max-w-sm">
        {data.map((item) => {
          return (
            <li key={item.id} className="mb-2 list-none">
              <Card withBorder>
                <div className="flex">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    className="mr-3 mt-2 h-[38px] w-[38px]"
                  />
                  <div className="w-full flex-row justify-between">
                    <Text weight={500}>
                      {item.title}
                      <span className="text-sm text-gray-400">
                        {" "}
                        @{item.account}
                      </span>
                    </Text>
                    <div className="text-sm leading-relaxed">
                      {item.content}
                    </div>
                    <a
                      className="text-blue-500 hover:animate-pulse"
                      href={item.href}
                    >
                      {item.href}
                    </a>
                    <div className="text-sm leading-loose">{item.date}</div>
                  </div>
                </div>
              </Card>
            </li>
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
