import { Button } from "@mantine/core";
import React from "react";
import { Title } from "src/components/atom/title";
import { metaData } from "src/metadata";

import { GitHubRepos } from "./gitHubRepos";

export const GitHubSection = () => {
  return (
    <div className="nm-container mx-auto px-4 pb-10 sm:px-10">
      <Title>GitHub</Title>
      <GitHubRepos />
      <div className="mt-6 flex justify-center py-10">
        <a href={metaData.github} target="_blank" rel="noreferrer">
          <Button color="dark">View on GitHub</Button>
        </a>
      </div>
    </div>
  );
};
