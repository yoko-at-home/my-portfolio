import { FC, ReactNode } from "react"

type Title = {
  children: ReactNode
}
export const Title:FC<Title> = (props) => {
  return (
    <div className="text-[26px] font-bold text-[#25262B] my-10">{props.children}</div>

  )
}
