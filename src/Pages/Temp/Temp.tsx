import React, { useState } from "react";

function Temp() {
  const [first, setFirst] = useState("");

  const showDiv = (id: string) => {
    setFirst(id);
  };

  const removeDiv = () => {
    setFirst("");
  };

  return (
    <div className="flex">
      <button
        className="mx-2 relative"
        onMouseOver={() => showDiv("Temp1")}
        onMouseOut={removeDiv}
      >
        Temp1
        <div className="flex justify-center">
        <div className={`absolute bg-blue-500 h-1 transition-all duration-300 ${first === "Temp1" ? "w-full" : "w-0"}`}></div>
        </div>
      </button>

      <button
        className="mx-2 relative"
        onMouseOver={() => showDiv("Temp2")}
        onMouseOut={removeDiv}
      >
        Temp2
        <div
          className={`absolute bg-blue-500 h-1 transition-all duration-300 ${
            first === "Temp2" ? "w-full" : "w-0"
          }`}
        ></div>
      </button>

      <button
        className="mx-2 relative"
        onMouseOver={() => showDiv("Temp3")}
        onMouseOut={removeDiv}
      >
        Temp3
        <div
          className={`absolute bg-blue-500 h-1 transition-all duration-300 ${
            first === "Temp3" ? "w-full" : "w-0"
          }`}
        ></div>
      </button>
    </div>
  );
}

export default Temp;
