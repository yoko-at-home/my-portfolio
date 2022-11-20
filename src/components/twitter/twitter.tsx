import { Anchor, Avatar, Box, Button, Card, Text } from "@mantine/core";
import { loadDefaultJapaneseParser } from "budoux";
import dayjs from "dayjs";
import reactStringReplace from "react-string-replace";
import { Title } from "src/components/atom/title";
import { useFetcher } from "src/hooks/useFetcher";
import { TwitterTweetProps, TwitterUserProps } from "src/types";

export const TwitterSec = () => {
  const parser = loadDefaultJapaneseParser();
  const { data: user, error: userError } = useFetcher<{
    data: TwitterUserProps;
  }>("twitter/user?user.fields=profile_image_url");
  const { data: tweet, error: tweetError } = useFetcher<{
    data: TwitterTweetProps[];
  }>(
    "twitter/tweet?max_results=5&tweet.fields=created_at&user.fields=name&exclude=replies,retweets"
  );

  if (userError) throw new Error(userError);
  if (tweetError) throw new Error(tweetError);

  return (
    <div className="nm-container mx-auto px-4 pb-10 sm:px-10">
      <Title>Twitter</Title>
      <ul className="grid grid-cols-1 sm:w-96">
        {tweet?.data.map((item, i) => {
          return (
            <li key={item.id} className="nm-list mb-2 list-none">
              <Card withBorder>
                <div className="flex">
                  <Avatar
                    src={user?.data.profile_image_url}
                    alt={user?.data.username}
                    className="mr-3 mt-2 rounded-full"
                  />
                  <div className="w-52 flex-row justify-between xs:w-60 sm:w-80">
                    <Text weight={700}>
                      {user?.data.name}
                      <span className="text-xs font-light text-gray-600">
                        {" "}
                        @{user?.data.username}
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
                          parser.parse(item.text),
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
                      </Box>
                    </div>
                    <div className="text-sm leading-loose">
                      {dayjs(item.created_at).format("YYYY.MM.DD")}
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
