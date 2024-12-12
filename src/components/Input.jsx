import React from "react";

const Input = ({ place }) => {
  return (
    <div>
      <input type="text" className="input" placeholder={place} />
    </div>
  );
};

export default Input;
