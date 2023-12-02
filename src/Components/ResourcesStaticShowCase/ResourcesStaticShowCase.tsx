import React from "react";

function ResourcesStaticShowCase() {
  interface staticResource {
    img: string;
    name: string;
    feature: string;
  }
  const secondSection: staticResource[] = [
    {
      img: "https://www.junglescout.com/wp-content/uploads/2020/03/group-6@2x.png",
      name: "Search global marketplaces",
      feature: "Easily search for products in other Amazon marketplaces.",
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2020/03/group-5-copy@2x.png",
      name: "Product ranking",
      feature: "View a product’s Amazon ranking to help make your choice.",
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2020/03/icon-calculator-copy@2x.png",
      name: "Profit calculator",
      feature: "A handy calculator shows you all your product-related fees.",
    },
  ];
  const firstSection: staticResource[] = [
    {
      img: "https://www.junglescout.com/wp-content/uploads/2020/03/icon-filter-copy@2x.png",
      name: "Save filter presets",
      feature: "Create and save as many custom filter presets as you need.",
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2020/03/group-9-copy@2x.png",
      name: "Sync with Product Tracker",
      feature: "Automatically add products to the Product Tracker in groups.",
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2020/03/group-3-copy@2x.png",
      name: "Export results to .CSV",
      feature: "Conveniently export your search results to a spreadsheet.",
    },
  ];
  return (
    <section className="min-[1200px]:max-w-[1200px] min-[992px]:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto py-12">
      <h1 className="text-center font-extrabold text-32 py-12 mb-4  px-4">
        More resources to help you get started
      </h1>
      <div>
        {/* FIRST SECTION */}
        <div className="w-full flex flex-col md:flex-row md:justify-between justify-center">
          {firstSection.map((item, index) => {
            return (
              <div key={index} className="py-4 px-4.5">
                <div className="flex justify-center">
                  <img src={item.img} alt="" width={36} height={50} />
                </div>
                <div className="text-center">
                  <p className="font-extrabold mb-1">{item.name}</p>
                  <p className="px-14 mb-4">{item.feature}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* SECOND SECTION */}
        <div className="w-full flex flex-col md:flex-row md:justify-between justify-center">
          {secondSection.map((item, index) => {
            return (
              <div key={index} className="py-4 px-4.5">
                <div className="flex justify-center">
                  <img src={item.img} alt="" width={36} height={50} />
                </div>
                <div className="text-center">
                  <p className="font-extrabold mb-1">{item.name}</p>
                  <p className="px-14 mb-4">{item.feature}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ResourcesStaticShowCase;
