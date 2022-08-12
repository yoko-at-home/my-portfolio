import { Button, Card, Text } from "@mantine/core";
import Link from "next/link";
import { Title } from "src/components/title";
import { data } from "./data";
export const BlogSec = () => {

  return (
    <div className="mx-4 pb-10 sm:mx-auto">
      <Title>Blog</Title>
      {data.map((item) => {
        return (
          <li key={item.id} className="list-none">
            <Link href={`/blog/${item.id}`}>
              <Card>
                <Text size="lg">{item.title}</Text>
                <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
                  {item.content}
                </div>
                <Text size="sm" color="dimmed">
                  {item.date}
                </Text>
              </Card>
            </Link>
          </li>
        );
      })}
      <div className="flex justify-center py-10">
        <Link href="/blog">
          <Button color="dark">View All</Button>
        </Link>
      </div>
    </div>
  );
};
