import { Text } from "@mantine/core";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
  message: string;
};

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return <Text>{message}</Text>;
};

export const ErrorWrapper: React.FC<Props> = ({ children, message }) => {
  return (
    <ErrorBoundary FallbackComponent={() => <ErrorMessage message={message} />}>
      {children}
    </ErrorBoundary>
  );
};
