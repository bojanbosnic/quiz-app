import React from "react";
import { Switch } from "@/components/ui/switch";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-end mb-20">
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
          <Switch />
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
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div>
            <h1 className="h1">
              <span className="">Welcome to the </span>
              <span className="font-medium ">Frontend Quiz!</span>
            </h1>
            <h2 className="h2">Pick a subject to get started.</h2>
          </div>
          <div>
            <u className="list-none no-underline">
              <li className="quiz-card">
                <span className="flex items-center justify-center w-14 h-14 rounded-md bg-[#FFF1E9] mr-4 md:mr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40px"
                    height="40px"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#FF7E35"
                      d="M9.803 3.043a.5.5 0 0 1 .254.66l-4 9a.5.5 0 0 1-.914-.406l4-9a.5.5 0 0 1 .66-.254m-5.47 2.333a.5.5 0 0 1 .04.706L2.67 8l1.705 1.918a.5.5 0 1 1-.748.664l-2-2.25a.5.5 0 0 1 0-.664l2-2.25a.5.5 0 0 1 .706-.042m7.335 0a.5.5 0 0 1 .706.042l2 2.25a.5.5 0 0 1 0 .664l-2 2.25a.5.5 0 1 1-.748-.664L13.331 8l-1.705-1.918a.5.5 0 0 1 .042-.706"
                    />
                  </svg>
                </span>
                <span className="uppercase text-white">Html</span>
              </li>
              <li className="quiz-card">
                <span className="flex items-center justify-center w-14 h-14 rounded-md bg-[#FFF1E9] mr-4 md:mr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40px"
                    height="40px"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#699bf7"
                      d="M3.5 1a.5.5 0 0 0-.5.5V9a2 2 0 0 0 2 2h1v2a2 2 0 1 0 4 0v-2h1a2 2 0 0 0 2-2V1.5a.5.5 0 0 0-.5-.5zM4 7V2h4v1.5a.5.5 0 0 0 1 0V2h1v2.5a.5.5 0 0 0 1 0V2h1v5zm0 1h8v1a1 1 0 0 1-1 1H9.5a.5.5 0 0 0-.5.5V13a1 1 0 1 1-2 0v-2.5a.5.5 0 0 0-.5-.5H5a1 1 0 0 1-1-1z"
                    />
                  </svg>
                </span>
                <span className="uppercase text-white">Css</span>
              </li>
              <li className="quiz-card">
                <span className="flex items-center justify-center w-14 h-14 rounded-md bg-[#FFF1E9] mr-4 md:mr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40px"
                    height="40px"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#306AFF"
                      d="M8.5 7.5A1.5 1.5 0 0 1 10 6h1.5a.5.5 0 0 1 0 1H10a.5.5 0 0 0-.5.5V8a.5.5 0 0 0 .5.5h.5A1.5 1.5 0 0 1 12 10v.5a1.5 1.5 0 0 1-1.5 1.5H9a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5H10A1.5 1.5 0 0 1 8.5 8zm-.5-1a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1A1.5 1.5 0 0 0 8 10.5zm-6-2A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3z"
                    />
                  </svg>
                </span>
                <span className="text-white">JavaScript</span>
              </li>
              <li className="quiz-card">
                <span className="flex items-center justify-center w-14 h-14 rounded-md bg-[#FFF1E9] mr-4 md:mr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40px"
                    height="40px"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#A729F5"
                      d="M6.75 3.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0M8 1a2.25 2.25 0 0 0-2.19 2.766l-1.612-.65a1.6 1.6 0 0 0-2.076.872a1.58 1.58 0 0 0 .87 2.07L5 6.869v2.384l-1.813 3.41a1.591 1.591 0 1 0 2.81 1.495L8 10.39l2.004 3.768a1.591 1.591 0 0 0 2.81-1.494L11 9.252V6.869l2.008-.811a1.58 1.58 0 0 0 .87-2.07a1.6 1.6 0 0 0-2.076-.873l-1.611.651q.058-.248.059-.516A2.25 2.25 0 0 0 8 1M3.047 4.369a.6.6 0 0 1 .776-.327l3.428 1.385a2 2 0 0 0 1.498 0l3.428-1.385a.6.6 0 0 1 .776.327a.58.58 0 0 1-.32.762l-2.008.81A1 1 0 0 0 10 6.87v2.383a1 1 0 0 0 .117.47l1.814 3.411a.592.592 0 0 1-1.044.556L8.883 9.92a1 1 0 0 0-1.766 0l-2.003 3.767a.591.591 0 1 1-1.044-.555l1.813-3.41A1 1 0 0 0 6 9.253V6.869a1 1 0 0 0-.625-.927L3.367 5.13a.58.58 0 0 1-.32-.762"
                    />
                  </svg>
                </span>
                <span className="text-white">Accessibility</span>
              </li>
            </u>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
