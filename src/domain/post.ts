import {client} from "../infrastructure";
import type {MicroCMSQueries} from "microcms-js-sdk";
import type {Tag} from "./tag.ts";

export type Post = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  tags: Tag[]
  content: string
  image: {
    url: string
    height: number
    width: number
  }
}
export type PostResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: Post[]
}

export const post = {
  getPosts: async (queries: MicroCMSQueries = {}) => {
    return await client.get<PostResponse>({
      endpoint: "posts", queries
    });
  },
}
