import { useState } from "react";

export const useCounter = (initialValue: number = 1) => {
  const [prev, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(prev + 1);
  };

  const decrement = () => {
    if (prev <= 1) return;

    setCounter(prev - 1);
  };

  return {
    //propierties
    counter: prev,
    //methods
    increment,
    decrement,
  };
};
