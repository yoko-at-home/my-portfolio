import { Button, Card, Text } from "@mantine/core";
import { Layout } from "src/layout";
import { useRouter } from "next/router";
import { data } from "src/components/blog/data";

const BlogId = () => {
  const router = useRouter();
  const blogPagePath = router.asPath;
  const blogPageId = blogPagePath.substring(6);
  let pageData = data.filter((data) => data.id === blogPageId);
  return (
    <div>
      <Layout>
        {pageData.map((item) => {
          return (
            <Card key={item.id}>
              <Text size="lg">{item.title}</Text>
              <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
                {item.content}
              </div>
              <Text size="sm" color="dimmed">
                {item.date}
              </Text>
            </Card>
          );
        })}
        <div className="flex justify-center pb-10">
          <Button color="dark" onClick={() => router.back()}>
            Return
          </Button>
        </div>
      </Layout>
    </div>
  );
};

export default BlogId;
