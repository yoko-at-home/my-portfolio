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
