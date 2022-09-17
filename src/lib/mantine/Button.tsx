import type { ButtonProps } from "@mantine/core";
import { Button as MantineButton } from "@mantine/core";
import { cloneElement, forwardRef } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps<"button" | "a"> & { dent?: boolean }
>(({ dent, sx, ...props }, ref) => {
  return cloneElement(<MantineButton />, {
    ref,
    sx: {
      ...sx,
      "&:not(:disabled):active": dent ? undefined : { transform: "none" },
    },
    ...props,
  });
});

Button.displayName = "Button";
