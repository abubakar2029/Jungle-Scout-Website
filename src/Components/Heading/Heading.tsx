import React from "react";

function Heading(props: any) {
  return (
    <section
    className={`xl:max-w-[1200px] pt-11 ${props.fontWeight} ${props.fontSize} ${
      props.mb
    } lg:max-w-[992px] md:max-w-[720px] mx-auto ${
      props.pxs ? `sm:px-${props.pxs}` : "sm:px-4.5"
    } ${props.pxm ? `md:px-${props.pxm}` : "md:px-4.5"} ${
      props.pxl ? `lg:px-${props.pxl}` : "lg:px-4.5"
    }  sm:max-w-[540px] w-full`}
  >
      <h1 className={`block text-center`}>{props.text}</h1>
    </section>
  );
}

export default Heading;
