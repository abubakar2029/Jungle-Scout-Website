import * as Types from "../../Types";

import React from "react";

function BrandAffiliations(props: Types.BrandAffliationsProps) {
  return (
    <section className="-mt-2 mx-auto xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full">
      <div className="pt-8 pb-12">
        <h4 className="text-slate-500 mb-8 text-center font-bold">
          {props.data.heading}
        </h4>
        <div className="px-4 flex space-x-4 justify-between items-center flex-wrap ">
          {props.data.brandsLogos.map(
            (item: Types.brandsLogo, index: number) => (
              <div key={index} className="mb-8">
                <img
                  src={item.logo}
                  alt=""
                  className={`${item.width} ${item.height}`}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default BrandAffiliations;
