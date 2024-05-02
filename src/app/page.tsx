"use client";
import Image from "next/image";
import HomePage from "@/components/Home";

const Home = () => {
  return (
    <div className="bg-tertiary h-screen flex justify-center items-center">
      <header></header>
      <main>
        <HomePage />
      </main>
      <footer>
        <div className="text-center hidden">
          2024 &copy; All rights resrved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
