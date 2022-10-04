import { useViewportSize } from "@mantine/hooks";

export const MOBILE_WIDTH = 576;
export const useIsMobile = () => {
  const { width } = useViewportSize();
  if (width === undefined) {
    return null;
  }
  return width < MOBILE_WIDTH;
};
