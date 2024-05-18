import React from "react";
import Questions from "./Questions";
import Header from "./Header";
const Question = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-20">
        <Header title="Accessibility" />
      </div>
      <div className="flex  justify-between">
        <div>
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
          <Questions title="Accessibility" />
        </div>
      </div>
    </div>
  );
};

export default Question;
