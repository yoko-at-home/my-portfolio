export type Repositories = {
  user: {
    pinnedItems: {
      edges: {
        node: {
          id: string;
          name: string;
          description: string | null;
          forkCount: number;
          languages: LanguageProp;
          stargazerCount: number;
          url: string;
        };
      }[];
    };
  };
};

export type LanguageProp = {
  edges: {
    node: {
      id: string;
      name: string;
      color: string;
    };
    size: number;
  }[];
  totalSize: number;
};
