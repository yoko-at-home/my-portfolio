export type Repositories = {
  user: {
    pinnedItems: {
      edges: {
        node: {
          id: string;
          name: string;
          description: string | null;
          forkCount: number;
          languages: {
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
          stargazerCount: number;
          url: string;
        };
      }[];
    };
  };
};

export type LanguageProp = {
  languages: {
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
};
