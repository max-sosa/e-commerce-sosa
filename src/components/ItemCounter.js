import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCounter = ({ stock }) => {
  const [counter, setCounter] = useState(0);
  const [currentTimes, setCurrentTimes] = useState(0);
  const [currentDate, setCurrentDate] = useState("");

  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
  };

  const takeMe = () => {
    setCurrentTimes(currentTimes + 1);
    const today = new Date();
    setCurrentDate(
      `Today is ${today.getFullYear()}-${
        today.getMonth() + 1
      }-${today.getDate()} and it is ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} in my country.`
    );
  };

  return (
    <>
      <div>
        <h3>You push me {currentTimes} times.</h3>
        <h3>{currentDate}</h3>
        <Button variant="outline-danger" onClick={minusCounter}>-</Button>
        <span>       {counter}      </span>
        <Button variant="outline-danger" onClick={plusCounter}>+</Button>
      </div>
      <Button variant="outline-danger" onClick={takeMe}>Push me</Button>
    </>
  );
};

export default ItemCounter;