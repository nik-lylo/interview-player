import React, { useEffect } from "react";
import "./popupInput.scss";

const PopupInput = ({ placeholder, value, handleChange, name }) => {
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <input
      className="popup-input"
      value={value}
      onChange={(e) => handleChange(e, name)}
      placeholder={placeholder}
      type="text"
    />
  );
};

export default PopupInput;
