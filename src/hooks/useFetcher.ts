import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useFetcher = <T>(slug: string) => {
  const { data, error } = useSWR<T>(`/api/${slug}`, fetcher, {
    suspense: true,
  });

  return {
    data,
    error,
  };
};
