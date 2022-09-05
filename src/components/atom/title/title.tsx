import { FC, ReactNode } from "react"

type Title = {
  children: ReactNode
}
export const Title:FC<Title> = (props) => {
  return <div className="my-10 text-[26px] font-black">{props.children}</div>;
}
