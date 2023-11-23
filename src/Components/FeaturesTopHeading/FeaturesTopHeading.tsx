import React from "react";

function FeaturesTopHeading(props: any) {
  const props1 = props.ExtensionOverview;

  return (
    <div className="flex justify-center">
      <section className="px-4.5 py-11 mt-12 mb-6 lg:max-w-[58%] lg:basis-[58%] md:max-w-[91%] md:basis-[91%] w-full">
        <h1
          className="font-extrabold text-center mb-2 block"
          style={{ fontSize: `calc(1.325rem + .9vw)` }}
        >
          {props1.heading}
        </h1>
        <p className="mb-4 leading-6 px-3 text-center block">{props1.text}</p>
      </section>
    </div>
  );
}

export default FeaturesTopHeading;
