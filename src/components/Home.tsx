import React from "react";
import Questions from "./Questions";
import Header from "./Header";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-20">
        <Header title="" />
      </div>
      <div className="w-full">
        <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between">
          <div>
            <h1 className="h1">
              <span className="">Welcome to the </span>
              <span className="font-medium ">Frontend Quiz!</span>
            </h1>
            <h2 className="h2">Pick a subject to get started.</h2>
          </div>
          <div className="min-w-[564px]">
            <Questions title="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
