import React from "react";
import { Link } from "react-router-dom";
import * as Types from "../../Types";
function GetStarted3(props: any) {
  const data: Types.GetStarted3 = props.getStarted;
  return (
    <section
      style={{ backgroundImage: `url(${data.bgImg})` }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <div className="text-white py-11 px-4.5">
        <div className="mt-5 mb-4 text-32 font-extrabold text-center">
          <h1>{data.heading1}</h1>
          <h1>{data.heading2 || ""}</h1>
        </div>
        <div className="flex justify-center mt-2">
          <Link
            to={data.getStartedLink}
            className=" bg-black font-extrabold py-4 px-7.5 rounded-sm"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GetStarted3;
