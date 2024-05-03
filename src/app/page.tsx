"use client";
import HomePage from "@/components/Home";
import Question from "@/components/Question";
import { useState } from "react";

const Home = () => {
  const [state, setState] = useState(true);
  return (
    <div className="bg-tertiary h-screen flex justify-center items-center">
      <header></header>
      <main>{state ? <HomePage /> : <Question />}</main>
      <footer>
        <div className="text-center hidden">
          2024 &copy; All rights resrved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
