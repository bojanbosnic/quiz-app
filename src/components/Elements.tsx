import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { elements, answers } from "../../icons-elements";

const Elements = () => {
  return (
    <>
      <ul className="list-none no-underline">
        {elements.map((element, i) => (
          <Link href={element.heading.toLowerCase()} key={i}>
            <button className="quiz-card">
              <span className="flex items-center justify-center w-14 h-14 rounded-md bg-[#FFF1E9] mr-4 md:mr-8">
                {element.svg}
              </span>
              <span className="text-xl text-white md:text-3xl">
                {element.heading}
              </span>
            </button>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Elements;
