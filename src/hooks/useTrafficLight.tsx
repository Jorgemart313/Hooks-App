import { useEffect, useState } from "react";

export const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColors = "red" | "yellow" | "green";

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColors>("red");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      //console.log("SetInterval llamado");
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      //console.log("clean up effect");
      clearInterval(intervalId);
    };
  }, [countdown]);

  // change light color effect
  useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);

    if (light === "red") {
      setLight("green");
      return;
    }

    if (light === "yellow") {
      setLight("red");
      return;
    }

    if (light === "green") {
      setLight("yellow");
      return;
    }

    return;
  }, [countdown, light]);

  return { light, countdown };
};
