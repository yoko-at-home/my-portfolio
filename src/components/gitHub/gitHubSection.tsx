import { Title } from "src/components/atom/title";
import { LinkButton } from "src/components/button/LinkButton";
import { useIsMobile } from "src/lib/useIsMobile";
import { metaData } from "src/metadata";

import { GitHubRepos } from "./gitHubRepos";

export const GitHubSection = () => {
  return (
    <div className="nm-container mx-auto px-4 pb-10 sm:px-10">
      <Title>GitHub</Title>
      <div
        className={`nm-tray overflow-scroll p-2 ${
          useIsMobile() ? "h-screen" : "h-[125vh]"
        }`}
      >
        <GitHubRepos />
      </div>
      <div className="mt-6 flex justify-center py-10">
        <LinkButton href={metaData.github} color="dark">
          View on GitHub
        </LinkButton>
      </div>
    </div>
  );
};
