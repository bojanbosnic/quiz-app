"use client";
import HomePage from "@/components/Home";
import Question from "@/components/Question";
import { useSelector } from "react-redux";

const Home = () => {
  const count = useSelector((state: RootState) => state.quiz.page);

  return (
    <div className="bg-tertiary h-screen flex justify-center items-center">
      <header></header>
      <main>{count ? <HomePage /> : <Question />}</main>
      <footer>
        <div className="text-center hidden">
          2024 &copy; All rights resrved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
