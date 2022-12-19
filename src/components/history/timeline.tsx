/* eslint-disable react/jsx-key */
import "react-vertical-timeline-component/style.min.css";

import { Button } from "@mantine/core";
import Link from "next/link";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

// import { PageTitle } from "src/component/PageTitle";
import { data } from "./data";

export const TimeLine = () => {
  return (
    <div
      className="my-20 bg-[#080869]/20 py-20"
      style={{ fontFamily: "Trebuchet Ms" }}
    >
      <VerticalTimeline>
        {data.map((event) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={event.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3
                className="vertical-timeline-element-title"
                dangerouslySetInnerHTML={{ __html: event.event }}
              />
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <div className="my-20 mx-20 flex flex-col justify-between text-center sm:flex-row">
        <Link href="/portfolio" passHref>
          <Button color="pink" size="lg" radius={"lg"}>
            過去の実績、作品
          </Button>
        </Link>
        <div className="p-2" />
        <Link href="/contact" passHref>
          <Button color="grape" size="lg" radius={"lg"}>
            お問い合わせ
          </Button>
        </Link>
      </div>
    </div>
  );
};