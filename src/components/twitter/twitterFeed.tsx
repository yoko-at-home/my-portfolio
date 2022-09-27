import { Timeline } from "react-twitter-widgets";
import { Title } from "src/components/atom/title";
import { Button, useViewportSize } from "src/lib/mantine";

export const TwitterFeed = () => {
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }
  const isMobile = width < 576;
  return (
    <div className="nm-container mx-auto px-4 pb-10 sm:px-10">
      <Title>Twitter</Title>
      <div
        className={`nm-tray overflow-scroll ${
          isMobile ? "h-screen" : "h-[120vh]"
        }`}
      >
        <Timeline
          dataSource={{ screenName: "yokoiwasaki6", sourceType: "profile" }}
          options={{
            height: "1200",
            lang: "en",
            width: "400",
          }}
        />
      </div>
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
