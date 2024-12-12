import React from "react";

const Button = ({ content, style }) => {
  return (
    <div>
      <button className={style}>{content}</button>
    </div>
  );
};

export default Button;
