'use client'
import React, { useState, useEffect } from "react";


const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [sessionType, setSessionType] = useState("Work");

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            if (sessionType === "Work") {
              setSessionType("Break");
              setTime(5 * 60); // 5 minutes break
            } else {
              setSessionType("Work");
              setTime(25 * 60); // 25 minutes work
            }
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive, sessionType]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSessionType("Work");
    setTime(25 * 60);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl mb-4">{sessionType} Session</h1>
      <div className="text-6xl font-bold">{formatTime(time)}</div>
      <div className="mt-8">
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded mr-4"
          onClick={toggleTimer}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;