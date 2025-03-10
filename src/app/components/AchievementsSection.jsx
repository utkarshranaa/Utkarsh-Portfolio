"use client";
import React from "react";

const achievementsList = [
  {
    metric: "Projects",
    value: "50",
    postfix: "+",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years of Coding",
    value: "6",
  },
  {
    metric: "Hackathon Wins",
    value: "4",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <span className="text-white text-4xl font-bold">
                  {achievement.value}
                </span>
                {achievement.postfix}
              </h2>
              <p className="text-white text-xl">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
