import React from "react";
import { useParams } from "react-router-dom";

function Features() {
  let param = useParams();
  console.log(param.pID);

  return <div>Features</div>;
}

export default Features;
