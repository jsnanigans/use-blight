import React, { FC } from "react";
import useBlight from "../lib";

const Button: FC = () => {
  const $ = useBlight({ x: 0 });
  const handleClick = () => ++$.x;
  return <button onClick={handleClick}>Increment: "{$.x}"</button>;
};

export default Button;
