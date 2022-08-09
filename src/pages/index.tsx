import type { NextPage } from "next";
import { ViewButton } from "src/components/buttons";
import { Layout } from "src/layout";
import { Button, useMediaQuery, useViewportSize } from "src/lib/mantine";

const Home: NextPage = () => {
  const { width } = useViewportSize();
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");

  const handleClick = () => {
    console.log("Hello!");
  };

  return (
    <Layout>
      <div className="p-20">
        Homeです
        <Button dent onClick={handleClick} className="mt-4 block">
          Click me!
        </Button>
        <Button onClick={handleClick} className="mt-4 block">
          Click me!
        </Button>
        <ViewButton type={"dark"} onClilck={handleClick}>
          View All
        </ViewButton>
        <ViewButton type={"light"} onClilck={undefined}>
          Edit
        </ViewButton>
      </div>
    </Layout>
  );
};

export default Home;
