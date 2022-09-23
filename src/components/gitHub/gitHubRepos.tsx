import { Box, Group, Image, Progress, Stack } from "@mantine/core";
import { useMemo } from "react";
import { useFetcher } from "src/hooks/useFetcher";
import { Repositories } from "src/types";

export const GitHubRepos = () => {
  const { data, error } = useFetcher<Repositories>("github/yoko-at-home");

  const languageProps = useMemo(() => {
    if (data) {
      return data.user.repositories.edges.map((repo) => {
        const totalSize = repo.node.languages.totalSize;
        return repo.node.languages.edges.flatMap((lang) => {
          const size = parseFloat(((lang.size / totalSize) * 100).toFixed(1));

          if (!size) return [];

          return {
            name: lang.node.name,
            color: lang.node.color,
            value: parseFloat(((lang.size / totalSize) * 100).toFixed(1)),
          };
        });
      });
    }
  }, [data]);

  if (error) throw new Error(error);
  if (!languageProps) throw new Error();

  return (
    <ul className="grid grid-cols-1 sm:w-96">
      <Stack spacing={40} mb={32}>
        {data?.user.repositories.edges.map(({ node }, index) => (
          <Box key={node.id}>
            <a href={node.url} target="_blank" rel="noreferrer">
              <div className="text-[22px] font-semibold text-slate-600">
                {node.name}
              </div>
            </a>
            <div className="text-gradient-sub overflow-hidden text-ellipsis text-sm">
              {node.description ?? "no description"}
            </div>
            <div className="my-3 flex justify-start">
              <div className="mr-8 flex">
                <Image src="/assets/svgs/star.svg" alt="star icon" />
                <span>{node.stargazerCount}</span>
              </div>
              <div className="flex">
                <Image src="/assets/svgs/fork.svg" alt="star icon" />
                <span>{node.forkCount}</span>
              </div>
            </div>
            <Box>
              <Progress mb={8} sections={languageProps[index]} />
              <Group sx={{ gap: "4px 20px" }}>
                {languageProps[index].map((props, i) => (
                  <Group key={i} spacing={6}>
                    <Box sx={{ backgroundColor: props.color }} />
                    <div className="text-gradient-sub text-sm">
                      {props.name}
                    </div>
                    <div className="text-gradient-sub text-sm">{`${props.value}%`}</div>
                  </Group>
                ))}
              </Group>
            </Box>
          </Box>
        ))}
      </Stack>
    </ul>
  );
};
