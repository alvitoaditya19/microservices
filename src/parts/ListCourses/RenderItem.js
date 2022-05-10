import React from "react";

import Link from "next/link";

import IconPlay from "public/images/icon-play.svg";

export default function RenderItem({ item }) {
  console.log(item);
  return (
    <div className="w-1/4 px-4">
      <div className="item relative">
        <figure className="item-image">
          <IconPlay></IconPlay>
          <img
            src={item?.galleries[0].url ?? ""}
            alt={item?.name ?? "Some Information"}
            className='w-full h-full'
          />
        </figure>
        <div className="item-meta">
          <h4 className="text-lg text-gray-900 truncate">
            {item?.name ?? "Course Name"}
          </h4>
          <h5 className="text-sm text-gray-600 truncate">
            {item?.level ?? "Course Level"}
          </h5>
        </div>
        <Link href="/course/[slug]" as={`/course/${item.id}`}>
          <a className="link-wrapped"></a>
        </Link>
      </div>
    </div>
  );
}
