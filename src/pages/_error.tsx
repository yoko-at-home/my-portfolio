import { NextPage, NextPageContext } from "next";
import Error from "next/error";

interface Props {
  statusCode?: number;
}

const ErrorPage: NextPage<Props> = ({ statusCode }) => {
  return statusCode ? (
    <Error statusCode={statusCode}></Error>
  ) : (
    <div>An error occurred on client</div>
  );
};

ErrorPage.getInitialProps = ({ err, res }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
