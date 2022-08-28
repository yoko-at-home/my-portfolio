import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListResponse,
} from "microcms-js-sdk";
import { ParsedUrlQuery } from "querystring";

export type Blog = {
  title?: string;
  lead?: string;
  content?: string;
  createdAt?: string;
  eyecatch?: {
    url?: string;
    height?: number;
    width?: number;
  };
  id?: string;
  publishedAt?: Date;
  limit?: number;
  offset?: number;
  totalCount?: number;
};

export type BlogProps = MicroCMSListResponse<Blog>;

export type BlogProps2 = {
  blogData: MicroCMSListResponse<Blog>[];
  totalCount: number;
};

export type BlogPortfolioProps = {
  blogData: MicroCMSListResponse<Blog>;
  portfolioData: MicroCMSListResponse<Blog>;
};

export type PropsPath = Blog &
  MicroCMSContentId &
  MicroCMSDate &
  ParsedUrlQuery;
