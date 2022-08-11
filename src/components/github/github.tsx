import { Button, Image, Progress } from "@mantine/core";
import { Title } from "src/components/title";
import { data } from "./data";
export const GitHubSec = () => {
  return (
    <div className="pb-10">
      <Title>GitHub</Title>
      <ul className="grid grid-cols-1 gap-6">
        {data.map((item) => {
          return (
            <li key={item.id} className="flex list-none flex-col">
              <div className="mx-auto max-w-sm">
                <div className="text-[22px] font-semibold">{item.title}</div>
                <div className="overflow-hidden text-ellipsis text-sm line-clamp-2">
                  {item.content}
                </div>
                <div className="flex justify-start my-3">
                  <div className=" mr-3 flex">
                    <Image
                      src="/assets/svgs/star.svg"
                      alt="star icon"
                    />{" "}
                  </div>
                  <div className="flex">
                    <Image
                      src="/assets/svgs/fork.svg"
                      alt="star icon"
                    />{" "}
                  </div>
                </div>
                <Progress
                  size="xl"
                  sections={[
                    { value: 65, color: "blue" },
                    { value: 30, color: "lime" },
                    { value: 5, color: "gray" },
                  ]}
                />
                <div className="flex justify-between text-sm">
                  <div>TypeScript {item.typescript}</div>
                  <div>JavaScript {item.javascript}</div>
                  <div>Other {item.other}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 flex justify-center  py-10">
        <a
          href="https://github.com/yoko-at-home/my-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <Button color="dark">View on GitHub</Button>
        </a>
      </div>
    </div>
  );
};
