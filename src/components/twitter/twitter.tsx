import { Anchor, Avatar, Box, Button, Card, Image, Text } from "@mantine/core";
import { loadDefaultJapaneseParser } from "budoux";
import dayjs from "dayjs";
import { useMemo } from "react";
import reactStringReplace from "react-string-replace";
import { Title } from "src/components/atom/title";
import { useFetcher } from "src/hooks/useFetcher";
import { TwitterTweetProps, TwitterUserProps } from "src/types";

export const TwitterSec = () => {
  const parser = loadDefaultJapaneseParser();
  const { data: user, error: userError } = useFetcher<{
    data: TwitterUserProps;
  }>("twitter/user?user.fields=profile_image_url");
  const { data: tweet, error: tweetError } = useFetcher<TwitterTweetProps>(
    "twitter/tweet?max_results=5&tweet.fields=created_at&user.fields=name,profile_image_url&exclude=replies,retweets&expansions=attachments.media_keys&media.fields=url"
  );

  if (userError) throw new Error(userError);
  if (tweetError) throw new Error(tweetError);

  const formattedTweets = useMemo(() => {
    const newTweets = tweet?.data.map((x) => {
      // メディアがあった場合
      if (x.attachments) {
        const imageUrls = x.attachments.media_keys.map((key) => {
          const targetImage = tweet.includes.media.find(
            (y) => y.media_key === key
          );
          // 画像ならurlを返す
          if (targetImage && targetImage.type === "photo") {
            return targetImage.url;
          }
          return "";
        });
        x.imageUrls = imageUrls;
      }
      return x;
    });
    return newTweets;
  }, [tweet]);

  return (
    <div className="nm-container mx-auto px-4 pb-10 sm:px-10">
      <Title>Twitter</Title>
      <ul className="grid w-96 grid-cols-1 sm:w-[30vw] xs:px-8">
        {formattedTweets?.map((item, i) => {
          return (
            <li key={item.id} className="nm-list mb-2 list-none">
              <Card withBorder>
                <div className="flex">
                  <Avatar
                    src={user?.data.profile_image_url}
                    alt={user?.data.username}
                    className="mr-3 mt-2 rounded-full"
                  />
                  <div className="w-52 flex-row justify-between md:w-full sm:w-96 xs:w-60">
                    <Text weight={700}>
                      {user?.data.name}
                      <span className="text-xs font-light text-gray-600">
                        {" "}
                        @{user?.data.username}・{" "}
                        {dayjs(item.created_at).format("YYYY.MM.DD")}
                      </span>
                    </Text>
                    <div className="my-2 text-sm leading-relaxed">
                      <Box
                        sx={{
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-all",
                        }}
                      >
                        {reactStringReplace(
                          item.text,
                          /(https?:\/\/\S+)/g,
                          (match, i) => (
                            <Anchor
                              sx={{ display: "block" }}
                              key={i}
                              href={match}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {match}
                            </Anchor>
                          )
                        )}
                        {item.imageUrls && (
                          <Box mt={16} sx={{ display: "grid", rowGap: "1rem" }}>
                            {item.imageUrls?.map(
                              (url, i) =>
                                url && <Image key={i} src={url} alt="" />
                            )}
                          </Box>
                        )}
                      </Box>
                    </div>
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
