import { createStyles } from "@mantine/core";
import Link from "next/link";

type Pagenation = {
  currentPageNum: number;
  maxPageNum: number;
};

const useStyles = createStyles((theme) => ({
  button: {
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3],
    },
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderRadius: "5px",
    height: "44px",
    width: "120px",
  },
  buttonWrapper: {
    marginRight: "135px",
    marginTop: "50px",
  },
  hideButton: {
    visibility: "hidden",
  },
}));

export const Pagination = ({ currentPageNum, maxPageNum }: Pagenation) => {
  const { classes } = useStyles();
  const prevPage = currentPageNum - 1;
  const nextPage = currentPageNum + 1;

  return (
    <div className="mt-10 mb-10">
      <div className="mx-auto flex max-w-[930px] items-center justify-between">
        <div
          className={currentPageNum !== 1 ? classes.button : classes.hideButton}
        >
          <Link href={`/blog/page/${prevPage}`}>
            <a className="flex h-full w-full items-center justify-center font-bold">
              戻る
            </a>
          </Link>
        </div>
        <div
          className={
            currentPageNum !== maxPageNum ? classes.button : classes.hideButton
          }
        >
          <Link href={`/blog/page/${nextPage}`}>
            <a className="flex h-full w-full items-center justify-center font-bold">
              次へ
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
