"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { setBackground } from "@/app/redux/quizSlice";
import { useDispatch, useSelector } from "react-redux";
type HeaderProps = {
  title: string;
};
const Header: React.FC<HeaderProps> = ({ title }) => {
  const dispatch = useDispatch();
  const switchColor = useSelector((state: RootState) => state.quiz.background);

  return (
    <>
      <div>
        <h1 className={switchColor ? `text-white` : `text-card`}>{title}</h1>
      </div>
      <div className="flex items-center ">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 16 16"
          >
            <path
              fill="#FFF"
              d="M8 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 1m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-1a2 2 0 1 1 0-4a2 2 0 0 1 0 4m6.5-1.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM8 13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 13M2.5 8.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm.646-5.354a.5.5 0 0 1 .708 0l1 1a.5.5 0 1 1-.708.708l-1-1a.5.5 0 0 1 0-.708m.708 9.708a.5.5 0 1 1-.708-.707l1-1a.5.5 0 0 1 .708.707zm9-9.708a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708m-.708 9.708a.5.5 0 0 0 .708-.707l-1-1a.5.5 0 0 0-.708.707z"
            />
          </svg>
        </span>
        <Switch onClick={() => dispatch(setBackground())} />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 16 16"
          >
            <path
              fill="#FFF"
              d="M7.85 3.015a5 5 0 1 1-4.585 7.712c1.403-.38 3.316-1.302 4.16-3.551c.552-1.474.584-2.938.425-4.16M13.456 8a6 6 0 0 0-6.21-5.996a.5.5 0 0 0-.475.592c.23 1.214.28 2.728-.283 4.228c-.8 2.134-2.802 2.84-4.077 3.071a.5.5 0 0 0-.361.71A6 6 0 0 0 13.456 8"
            />
          </svg>
        </span>
      </div>
    </>
  );
};

export default Header;
