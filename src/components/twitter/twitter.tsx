import { Anchor, Avatar, Box, Button, Card, Text } from "@mantine/core";
import dayjs from "dayjs";
import reactStringReplace from "react-string-replace";
import { Title } from "src/components/atom/title";
import { useFetcher } from "src/hooks/useFetcher";
import { TwitterTweetProps, TwitterUserProps } from "src/types";

export const TwitterSec = () => {
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
    <div className="mx-auto px-4 pb-10">
      <Title>Twitter</Title>
      <ul className="gridgrid-cols-1 grid max-w-md">
        {tweet?.data.map((item, i) => {
          console.log(user?.data);

          return (
            <li key={item.id} className="mb-2 list-none">
              <Card withBorder>
                <div className="flex">
                  <Avatar
                    src={user?.data.profile_image_url}
                    alt={user?.data.username}
                    className="mr-3 mt-2 rounded-full"
                  />
                  <div className=" w-full flex-row justify-between">
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
