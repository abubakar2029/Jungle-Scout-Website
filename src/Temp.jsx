import React, { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

function Temp() {
  const [state, setState] = useState("abc@");
  return (
    <div>
      <p>Enter password</p>
      <input
        type="password"
        name="password"
        value={state}
        className="bg-orange-300 p-3 w-24 h-6 border"
        onChange={(e) => setState(e.target.value)}
      />
      <PasswordStrengthBar
        password={state}
        onChangeScore={(score, feedback) => {
          console.log("score : ", score, "feedback : ", feedback);
        }}
        scoreWordClassName=""
        scoreWords={false}
      />
    </div>
  );
}

export default Temp;
