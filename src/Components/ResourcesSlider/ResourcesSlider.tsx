import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ResourcesSlider() {
  // later will be fetched by api
  let resources = [
    {
      comment:
        "“Jungle Scout is irreplaceable when researching and trying to understand the market for your product. The sales and tracking tools and educational resources make my work world easier, and my selections educated.”",
      name: "How to Sell on Amazon FBA for Beginners – 2023 Guide | Jungle Scout",
      img: "https://www.junglescout.com/wp-content/uploads/2022/09/01_how-to-sell-on-amazon@3x-570x320.jpg",
      href: "/",
    },
    {
      comment:
        "“One year has gone by, and I’m very happy with Jungle Scout. Very easy to use and navigate. Also, it allows me to see how well my Amazon FBA business is doing. I would be very lost with this business without Jungle Scout.”",
      name: "Make Money on Amazon in 2023 – 16 Top Methods",
      img: "https://www.junglescout.com/wp-content/uploads/2019/07/sharon-mccutcheon-8lnbXtxFGZw-unsplash.jpg",
    },
    {
      comment:
        "“Jungle Scout is the ONE tool I can not live without. There’s ways to use it that simply blow you away once you realize the power of what they can do for your business.”",
      name: "Amazon Inventory Management 2023 Guide",
      img: "https://www.junglescout.com/wp-content/uploads/2021/08/pexels-tiger-lily-4481260.jpg",
    },
    {
      comment:
        "“I LOVE review automation. I started using Jungle Scout’s Review Automation in January with 335 reviews. Seven months later, I currently have over 2000 reviews!”",
      name: "How to Buy on Alibaba and Sell on Amazon in 2023",
      img: "https://www.junglescout.com/wp-content/uploads/2021/08/hero_alibaba-fba-scaled-e1630107363859.jpg",
    },
    {
      comment:
        "“If you’re selling on Amazon or about to start searching for your product, Jungle Scout is an absolute MUST. It truly is the most user-friendly and useful tool for Amazon sellers.”",
      name: "Make Money on Amazon in 2023 – 16 Top Methods",
      img: "https://www.junglescout.com/wp-content/uploads/2019/07/sharon-mccutcheon-8lnbXtxFGZw-unsplash.jpg",
    },
    {
      comment:
        "“The #1 Amazon FBA tool out there. Without Jungle Scout, it would have been impossible to start & grow my Amazon FBA business. This is the only tool you need to be successful.”",
      name: "Amazon Inventory Management 2023 Guide",
      img: "https://www.junglescout.com/wp-content/uploads/2021/08/pexels-tiger-lily-4481260.jpg",
    },
    {
      comment:
        "“Jungle Scout not only provides accurate market data, but it’s also a complete tool suite that is easy to use for both beginners and advanced Amazon sellers.”",
      name: "2023 State of the Amazon Seller Report – Selling Statistics & Data",
      img: "https://www.junglescout.com/wp-content/uploads/2023/01/download-full-report_cover-art@1.5x-570x449.png",
    },
  ];

  // h-370,sm:470
  // previous-next-methods
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 6000,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pb-8 md:pb-20 ">
      <section className="w-full max-w-[1200px] mx-auto px-4.5">
        {/* top-div */}
        <div className="flex px-4 mb-3 max-md:flex-col justify-between">
          <h2 className="lg:text-32 text-[24px]">
            Expert recources for all Amazon sellers
          </h2>
          {/* arrows */}
          <div className="flex justify-end ">
            <div onClick={previous}>
              <ArrowBackIcon />
            </div>
            <div onClick={next}>
              <ArrowForwardIcon />
            </div>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {resources.map((resource, index) => {
            let bgImg = `url(${resource.img})`;
            console.log("abc", bgImg);

            return (
              <div>
                <div
                  className="bg-cover px-6 py-10 relative rounded text-white mx-2 h-[370px] md:h-[470px]"
                  style={{
                    backgroundImage: `url(${resource.img})`,
                  }}
                >
                  <div className="flex items-end h-full">
                    <div className="flex flex-col justify-start">
                      <h2 className="mb-2 font-black md:text-[24px] text-[20px]">
                        {resource.name}
                      </h2>
                      <p>
                        Read more{" "}
                        <span>
                          <ArrowForwardIcon />{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </div>
  );
}
// }

export default ResourcesSlider;
