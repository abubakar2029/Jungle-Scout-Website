import React from "react";
import { Link } from "react-router-dom";

function RegionSelectCard(props: any) {
  console.log("Props", props);

  return (
    <Link
      to={"/pricing"}
      className="border font-normal py-2 pl-2 mb-4 lg:basis-2/7 md:basis-47 lg:mx-7 max-md:basis-full bg-transparent h-10 rounded-sm text-zinc-200 text-base border-zinc-200 sm:w-80 max-md:ml-0 flex
      hover:bg-neutral-50 hover:outline-1 hover:outline  hover:outline-red-400"
    >
      {/* w-250 s-w-330 ---lg:w-64*/}
      <img
        src={props.props.img}
        alt={props.region}
        className="w-6 h-6"
      />
      <p className="pl-4 inline-block">{props.props.regionInfo}</p>
    </Link>

  );
}

export default RegionSelectCard;
