import React from "react";

const PasswordStrength = ({ password }) => {
  let strength = "";
  let textColorClass = "";

  if (password.length < 6) {
    strength = "Weak";
    textColorClass = "text-red-500"; 
  } else if (password.length >= 6 && password.length <= 8) {
    strength = "Medium";
    textColorClass = "text-yellow-500"; 
  } else {
    strength = "Strong";
    textColorClass = "text-green-500"; 
  }

  return (
    <div className="flex flex-row justify-between">
      <div className={textColorClass}>Password Strength</div>
      <div className={textColorClass}>{strength}</div>
    </div>
  );
};

export default PasswordStrength;
