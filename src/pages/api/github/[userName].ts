import { Octokit } from "@octokit/core";
import type { NextApiRequest, NextApiResponse } from "next";
import { Repositories } from "src/types";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { userName } = request.query;
  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  });
  const query = `
  query Repositories ($userName:String!) {
    user(login: $userName) {
      repositories(last: 6, privacy: PUBLIC, orderBy: {field: PUSHED_AT, direction: ASC}) {
        edges {
          node {
            id
            forkCount
            stargazerCount
            name
            description
            languages(first: 6) {
              edges {
                size
                node {
                  id
                  color
                  name
                }
              }
              totalSize
            }
          }
        }
      }
    }
  }
  `;
  const repositories = await octokit.graphql<Repositories>(query, {
    userName,
  });
  return response.status(200).json(repositories);
}
