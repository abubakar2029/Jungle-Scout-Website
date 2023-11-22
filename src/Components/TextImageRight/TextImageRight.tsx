import React from "react";

function TextImageRight(props: any) {
  const props1 = props.data;
  return (
    <section
      className={`flex ${
        props1.TextimageLeft ? "flex-row-reverse" : "flex-row"
      } mb-12 py-12 mx-auto justify-around xl:max-w-[1200px] min-[992px]:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full`}
    >
      {/* left-div-text */}
      <div
        className="lg:max-w-[41%] lg:basis-[41%] md:max-w-[50%]
        md:basis-1/2 w-full my-auto px-4.5"
      >
        <h1 className="block mb-2 text-[28px] font-extrabold">
          {props1.heading}
        </h1>
        <p className="mb-4 block">{props1.text}</p>
      </div>
      <div
        className="lg:max-w-[41%] lg:basis-[41%] md:max-w-[50%]
        md:basis-1/2 w-full my-auto "
      >
        {/* md-50 sm-100 */}
        <img src={props1.img} alt="" />
      </div>
    </section>
  );
}

export default TextImageRight;
