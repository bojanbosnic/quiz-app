import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "@/app/redux/quizSlice";
import { elements, answers } from "../../icons-elements";
type QuestionsProps = {
  title: string;
};
const Questions: React.FC<QuestionsProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [proba, setProba] = useState(false);

  const catchAnswer = (i: number) => {
    if (i === 0) {
      setProba(true);
      console.log("TRUE ANSWER");
    } else {
      console.log("WRONG ANSWER");
    }
  };
  return (
    <>
      <ul className="list-none no-underline">
        {title == ""
          ? elements.map((element, i) => (
              <li key={i}>
                <button
                  className="quiz-card"
                  onClick={() => dispatch(setPage())}
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-md bg-[#FFF1E9] mr-4 md:mr-8">
                    {element.svg}
                  </span>
                  <span className="text-xl text-white md:text-3xl">
                    {element.heading}
                  </span>
                </button>
              </li>
            ))
          : title == "Accessibility"
          ? answers.map((element, i) => (
              <li key={i}>
                <button onClick={() => catchAnswer(i)} className="quiz-card">
                  <span className="flex items-center justify-center w-14 h-14 rounded-md bg-[#FFF1E9] mr-4 md:mr-8">
                    <span className="text-grey">{element.letter}</span>
                  </span>
                  <span
                    className={
                      proba
                        ? `text-xl text-white md:text-3xl`
                        : `text-xl text-grey md:text-3xl`
                    }
                  >
                    {element.first}
                  </span>
                </button>
              </li>
            ))
          : null}
        <button className="w-full text-white font-medium rounded-lg flex justify-center items-center texts-xs bg-purple p-3 md:p-8 md:text-3xl">
          Submit Answer
        </button>
      </ul>
    </>
  );
};

export default Questions;
