export type GitHubCardProps = {
  id: string;
  name: string;
  description: string;
  forkCount: number;
  pinnedItems?: any;
  url: string;
};

export type LanguageStaticsProp = {
  languages: {
    edges: [
      {
        node: {
          name: string;
          color: string;
        };
        size: number;
      }
    ];
    totalSize: number;
  };
};

export type PinnedItemsProps = {
  user: {
    pinnedItems: {
      edges: {
        nodes: nodesType;
      };
      totalCount: number;
    };
  };
};

export type nodesType = {
  node: {
    id: string;
    name: string;
    description: string;
    forkCount: number;
    languages: LanguageStaticsProp;
    stargazerCount: 0;
    url: string;
  };
};
