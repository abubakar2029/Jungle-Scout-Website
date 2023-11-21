import React from "react";

function Heading(props: any) {
  return (
    <section
      className={`xl:max-w-[1200px] ${props.fontWeight} ${props.fontSize} ${
        props.mb
      } lg:max-w-[992px] md:max-w-[720px] mx-auto ${
        props.pxs ? "px-${props.pxS}" : "px-4.5"
      } ${props.pxm ? "px-${props.pxm}" : "px-4.5"} ${
        props.pxl ? "px-${props.pxl}" : "px-4.5"
      }  sm:max-w-[540px] w-full`}
    >
      <h1 className={`block text-center`}>{props.text}</h1>
    </section>
  );
}

export default Heading;
