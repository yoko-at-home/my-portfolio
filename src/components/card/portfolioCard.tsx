import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type CardProps = {
  id?: number;
  thumbnail: string;
  title: string;
  content?: string;
  lead: string;
  date: string;
};

export const PortfolioCard: FC<CardProps> = (props) => {
  return (
    <li
      key={props.id}
      className="relative mx-auto flex h-72 w-full max-w-lg list-none flex-col text-right"
    >
      <Link href={`/portfolio/${props.id}`}>
        <a>
          <Image src={props.thumbnail} alt={props.title} layout="fill" />
          <div className="absolute bottom-0 right-0 w-full bg-black/40 p-3 text-white">
            <span className="text-lg font-bold">{props.title}</span>
            <br />
            {props.date}
            <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
              {props.lead}
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};
