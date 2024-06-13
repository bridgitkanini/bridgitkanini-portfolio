"use client";
import React from "react";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faUserGroup,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    icon: faFolderOpen,
    metric: "Projects Completed",
    value: "20",
    postfix: "+",
  },
  {
    icon: faUserGroup,
    prefix: "~",
    metric: "Users",
    value: "1000",
  },
  {
    icon: faCertificate,
    metric: "Years Experience",
    value: "1",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="gap-4 xl:gap-16 py-2 sm:py-8 sm:-mt-2 mx-auto">
      <div className="rounded-md flex flex-row items-center gap-2 sm:gap-8">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center my-4 sm:my-0 bg-[#181919] sm:py-10 px-2 rounded-[30%]"
          >
            <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
              <FontAwesomeIcon
                icon={achievement.icon}
                className="text-slate-200 text-sm sm:text-xs md:text-xl mb-2"
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex flex-row items-center">
                {achievement.prefix && (
                  <span className="mr-1 text-transparent bg-clip-text bg-gradient-to-b from-amber-500 from-50% to-[#181919]">
                    {achievement.prefix}
                  </span>
                )}
                {/* <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-100 from-25% via-amber-500 via-50% to-amber-900 to-70%">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-4xl font-bold"
                    configs={(_, index) => ({
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                    })}
                  />
                </div> */}
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-500 from-50% to-[#181919]">
                  {achievement.value}
                </div>

                {achievement.postfix && (
                  <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-b from-amber-500 from-50% to-[#181919]">
                    {achievement.postfix}
                  </span>
                )}
              </h2>
              <p className="text-white text-xs mt-1">{achievement.metric}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
