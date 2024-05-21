"use client";
import React, { useState } from "react";
import { answers } from "../../../icons-elements";
import Header from "@/components/Header";
const Accessibility = () => {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(false);
  const catchAnswer = (index: number) => setQuestion(index);
  const finishAnswer = () => {
    console.log(question);

    if (question == 0) {
      console.log("Correct!");
      setAnswer(true);
    } else if (question == 1) {
      console.log("Wrong!");
      setAnswer(false);
    } else if (question == 2) {
      console.log("Wrong!");
      setAnswer(false);
    } else if (question == 3) {
      console.log("Wrong!");
      setAnswer(false);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-20">
        <Header title="Accessibility" />
      </div>
      <div className="flex justify-between">
        <div className="w-[465px] h-[452px]">
          <span className="h2">Question 6 of 10</span>
          <h2 className="qustion-h2">
            Which of these color contrast ratios defines the minimum WCAG 2.1
            Level AA requirement for normal text?
          </h2>
          <div className="flex items-center relative h-4 rounded-full bg-card">
            <div className="w-3/4 absolute left-1 h-2  bg-purple rounded-full"></div>
          </div>
        </div>
        <div className="min-w-[596px]">
          <ul className="list-none no-underline">
            {answers.map((element, i) => (
              <li key={i}>
                <button
                  onClick={() => catchAnswer(i)}
                  className={`quiz-card focus:outline-none focus:ring focus:ring-purple group transition`}
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-md bg-[#FFF1E9] mr-4 md:mr-8 group-focus:bg-purple transition-colors duration-300">
                    <span className="text-grey group-focus:text-white transition-colors duration-300">
                      {element.letter}
                    </span>
                  </span>
                  <span className={`text-xl text-white md:text-3xl`}>
                    {element.first}
                  </span>
                </button>
              </li>
            ))}
            <button
              onClick={finishAnswer}
              className="w-full text-white font-medium rounded-lg flex justify-center items-center texts-xs bg-purple p-3 md:p-8 md:text-3xl"
            >
              Submit Answer
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
