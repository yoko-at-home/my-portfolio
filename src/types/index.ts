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
  data: {
    id: string;
    attachments?: {
      media_keys: string[];
    };
    created_at: string;
    imageUrls?: string[];
    text: string;
  }[];
  includes: {
    media: {
      media_key: string;
      type: "photo" | "video";
      url: string;
    }[];
  };
  text: string;
};

export type GitHubCardProps = {
  id: string;
  name: string;
  description: string;
  forkCount: number;
  pinnedItems?: any;
  primaryLanguage: {
    name: string;
    color: string;
  };
  stargazers: {
    totalCount?: number;
  };
  url: string;
};
