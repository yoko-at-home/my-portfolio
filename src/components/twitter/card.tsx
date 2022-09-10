import { Avatar, Card, Text } from "@mantine/core";
import { FC } from "react";
import { metaData } from "src/metadata";
import { TwitterTweetProps } from "src/types";

export const TwitterCard: FC<TwitterTweetProps> = (props) => {
  return (
    <li key={props.id} className="mb-2 list-none">
      <Card withBorder>
        <div className="flex">
          <Avatar
            src={metaData.profile_image_url}
            alt={metaData.twitterName}
            className="mr-3 mt-2 rounded-full"
          />
          <div className="w-full flex-row justify-between">
            <Text weight={500}>
              {metaData.twitterName}
              <span className="text-sm text-gray-400">
                {" "}
                @{metaData.twitterAccount}
              </span>
            </Text>
            <div className="text-sm leading-relaxed">{props.text}</div>
            <div className="text-sm leading-loose">{props.created_at}</div>
          </div>
        </div>
      </Card>
    </li>
  );
};
