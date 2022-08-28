import { MicroCMSListResponse } from "microcms-js-sdk";

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

export type BlogPortfolioProps = {
  blogData: MicroCMSListResponse<Blog>;
  portfolioData: MicroCMSListResponse<Blog>;
};
