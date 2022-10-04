import { Button } from "@mantine/core";
import React from "react";
import { Title } from "src/components/atom/title";
import { LinkButton } from "src/components/button/LinkButton";
import { useViewportSize } from "src/lib/mantine";
import { metaData } from "src/metadata";

import { GitHubRepos } from "./gitHubRepos";

export const GitHubSection = () => {
  const { width } = useViewportSize();
  if (width === undefined) {
    return <div />;
  }
  const isMobile = width < 576;
  return (
    <div className="nm-container mx-auto px-4 pb-10 sm:px-10">
      <Title>GitHub</Title>
      <div
        className={`nm-tray overflow-scroll ${
          isMobile ? "h-screen" : "h-[125vh]"
        }`}
      >
        <GitHubRepos />
      </div>
      <div className="mt-6 flex justify-center py-10">
        <LinkButton href={metaData.github} color="dark">
          <Button color="dark">View on GitHub</Button>
        </a>
      </div>
    </div>
  );
};
