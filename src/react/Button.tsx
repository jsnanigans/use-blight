import React, { FC } from "react";
import usePlight from "../lib";

const Button: FC = () => {
  const $ = usePlight({ x: 0 });
  const handleClick = () => ++$.x;
  return <button onClick={handleClick}>Increment: "{$.x}"</button>;
};

export default Button;
