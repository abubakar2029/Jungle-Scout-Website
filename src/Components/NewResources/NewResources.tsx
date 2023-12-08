import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";
import React from "react";

function NewResources() {
  interface newResearches {
    img: string;
    heading: string;
    buttontext: string;
    buttonLink: string;
    title: string;
  }
  const newResearches: newResearches[] = [
    {
      img: "https://www.junglescout.com/wp-content/uploads/2023/12/hp-news-js-ctr-2023-q4-resources-thumbnail@2x.jpg",
      heading: "Consumer Trends Report | Q4 2023",
      buttontext: "Read more",
      buttonLink: "/",
      title: "new research",
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2023/11/js_seller-survey_resource-card@2x.jpg",
      heading: "Our annual State of the Amazon Seller survey is open! ",
      buttontext: "Win an Amazon gift card",
      buttonLink: "/",
      title: "new",
    },
  ];
  return (
    <section>
      <div className="mx-auto xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full">
        <p className="font-extrabold text-gray-400 mb-12 text-center">
          New resources from Jungle Scout
        </p>
        {/* cards */}
        <div className="flex justify-center">
          {newResearches.map((item: newResearches, index: number) => (
            <div
              className="max-w-[50%] flex px-3 max-[992px]:flex-col"
              key={index}
            >
              {/* IMAGE */}
              <div className="min-[992px]:max-w-[50%] w-full h-full ">
                <img src={item.img} alt="" className="h-full" />
              </div>
              {/* content */}
              <div className="min-[992px]:max-w-[50%] w-full border border-zinc-300 p-4 md:pl-8 max-[992px]:border-t-transparent min-[992px]:border-l-transparent rounded-tr rounded-br flex flex-col justify-between">
                <div>
                  <p className="tracking-[2px] uppercase mb-2 text-[12px]">
                    {item.title}
                  </p>
                  <p className="font-extrabold mb-4">{item.heading}</p>
                </div>
                <Link
                  to={item.buttonLink}
                  className="flex items-center text-blue-700 font-medium"
                >
                  <span className="whitespace-nowrap">{item.buttontext}</span>
                  <i className="material-icons pl-3">arrow_forward</i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewResources;
