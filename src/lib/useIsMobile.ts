import { useViewportSize } from "src/lib/mantine";

export const MOBILE_WIDTH = 576;
export const useIsMobile = () => {
  const { width } = useViewportSize();
  if (width === undefined) {
    return null;
  }
  return width < MOBILE_WIDTH;
};
