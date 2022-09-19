import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListResponse,
} from "microcms-js-sdk";
import { ParsedUrlQuery } from "querystring";

export type Blog = {
  id?: string;
  title?: string;
  content?: string;
  createdAt?: string;
  eyecatch?: {
    height?: number;
    url?: string;
    width?: number;
  };
  lead?: string;
  limit?: number;
  offset?: number;
  publishedAt?: Date;
  totalCount?: number;
  url?: string;
};

export type BlogProps = MicroCMSListResponse<Blog>;

export type BlogPortfolioProps = {
  blogData: MicroCMSListResponse<Blog>;
  portfolioData: MicroCMSListResponse<Blog>;
};

export type PropsPath = Blog &
  MicroCMSContentId &
  MicroCMSDate &
  ParsedUrlQuery;

export type TwitterUserProps = {
  id: string;
  name: string;
  profile_image_url: string;
  username: string;
};

export type TwitterTweetProps = {
  id: string;
  created_at: string;
  text: string;
};

export type GitHubCardProps = {
  id: string;
  name: string;
  description: string;
  pinnedItems?: any;
  stargazers: {
    totalCount?: number;
  };
  url: string;
};
