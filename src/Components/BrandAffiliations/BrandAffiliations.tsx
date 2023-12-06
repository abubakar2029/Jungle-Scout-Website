import React from "react";

function BrandAffiliations() {
  interface brandsLogo {
    logo: string;
    width: string;
    height: string;
  }
  const brandsLogos: brandsLogo[] = [
    {
      logo: "https://www.junglescout.com/wp-content/uploads/2022/03/hp_trusted-brand-johnson-outdoors_3x.png",
      width: "w-[114px]",
      height: "!h-[31px]",
    },
    {
      logo: "https://www.junglescout.com/wp-content/uploads/2022/03/hp_trusted-brand-starbucks_3x.png",
      width: "!w-[39px]",
      height: "!h-[39px]",
    },
    {
      logo: "https://www.junglescout.com/wp-content/uploads/2022/03/hp-fedex-logo@3x-1.png",
      width: "w-[84px]",
      height: "!h-[24px]",
    },
    {
      logo: "https://www.junglescout.com/wp-content/uploads/2022/03/hp_trusted-brand-keurig_3x.png",
      width: "w-[113px]",
      height: "!h-[19px]",
    },
    {
      logo: "https://www.junglescout.com/wp-content/uploads/2022/03/hp_trusted-brand-IP_3x.png",
      height: "!h-[18px]",
      width: "!w-[124px]",
    },
    {
      logo: "https://www.junglescout.com/wp-content/uploads/2022/03/hp-intel-logo@3x.png",
      height: "!h-[33px]",
      width: "w-[50px]",
    },
  ];
  return (
    <section className="mx-auto xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full">
      <div className="pt-8 pb-12">
        <h4 className="text-slate-500 mb-8 text-center">
          Trusted by leading brands
        </h4>
        <div className="px-4 flex space-x-4 justify-between items-center flex-wrap ">
          {brandsLogos.map((item: brandsLogo, index: number) => (
            <div key={index} className="mb-8">
              <img
                src={item.logo}
                alt=""
                className={`${item.width} ${item.height}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandAffiliations;
