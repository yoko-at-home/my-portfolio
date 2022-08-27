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
  revisedAt?: Date;
  updatedAt?: Date;
  limit?: number;
  offset?: number;
  totalCount?: number;
};

export type BlogPaginationProps = [
  blog: {
    id: string;
    createdAt: Date;
    title: string;
    content: HTMLAnchorElement;
    eyecatch: {
      url: string;
      height: number;
      width: number;
    };
    category: {
      id: string;
      createdAt: Date;
      name: string;
    };
    lead: string;
    limit?: number;
    offset?: number;
    totalCount?: number;
  }
];

export type BlogProps = MicroCMSListResponse<Blog>;
export type PropsPagination = MicroCMSListResponse<BlogPaginationProps>[];

export type ContactFormInput = {
  email: string;
  name: string;
  message: string;
};
