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
        className={`nm-tray overflow-hidden ${
          isMobile ? "h-screen" : "h-[125vh]"
        }`}
      >
        {isMobile ? (
          <Timeline
            dataSource={{ screenName: "yokoiwasaki6", sourceType: "profile" }}
            options={{
              height: "800",
              lang: "en",
              width: "310",
            }}
          />
        ) : (
          <Timeline
            dataSource={{ screenName: "yokoiwasaki6", sourceType: "profile" }}
            options={{
              height: "1200",
              lang: "en",
              width: "400",
            }}
          />
        )}
      </div>
      <div className="mt-6 flex justify-center py-10">
        <LinkButton href={metaData.twitterURL} color="dark">
          View on Twitter
        </LinkButton>
      </div>
    </div>
  );
};
