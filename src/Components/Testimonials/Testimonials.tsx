import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Testimonials() {
  // later will be fetched by api
  let testimonials = [
    {
      comment:
        "“Jungle Scout is irreplaceable when researching and trying to understand the market for your product. The sales and tracking tools and educational resources make my work world easier, and my selections educated.”",
      name: "Ronny C.",
      img: "https://www.junglescout.com/wp-content/uploads/2023/07/Generic-Avatar.jpg",
    },
    {
      comment:
        "“One year has gone by, and I’m very happy with Jungle Scout. Very easy to use and navigate. Also, it allows me to see how well my Amazon FBA business is doing. I would be very lost with this business without Jungle Scout.”",
      name: "Fidel L.",
      img: "https://www.junglescout.com/wp-content/uploads/2023/07/Generic-Avatar.jpg",
    },
    {
      comment:
        "“Jungle Scout is the ONE tool I can not live without. There’s ways to use it that simply blow you away once you realize the power of what they can do for your business.”",
      name: "Scott V.",
      img: "https://www.junglescout.com/wp-content/uploads/2023/07/scott-v-profile@2x.png",
    },
    {
      comment:
        "“I LOVE review automation. I started using Jungle Scout’s Review Automation in January with 335 reviews. Seven months later, I currently have over 2000 reviews!”",
      name: "Kim M.",
      img: "https://www.junglescout.com/wp-content/uploads/2023/07/kim-m-profile@2x.png",
    },
    {
      comment:
        "“If you’re selling on Amazon or about to start searching for your product, Jungle Scout is an absolute MUST. It truly is the most user-friendly and useful tool for Amazon sellers.”",
      name: "Tatiana James",
      img: "https://www.junglescout.com/wp-content/uploads/2023/07/tatiana-j-img@2x.png",
    },
    {
      comment:
        "“The #1 Amazon FBA tool out there. Without Jungle Scout, it would have been impossible to start & grow my Amazon FBA business. This is the only tool you need to be successful.”",
      name: "Dan Vas",
      img: "https://www.junglescout.com/wp-content/uploads/2023/07/dan-v-img@2x.png",
    },
    {
      comment:
        "“Jungle Scout not only provides accurate market data, but it’s also a complete tool suite that is easy to use for both beginners and advanced Amazon sellers.”",
      name: "Crescent Kao",
      img: "https://www.junglescout.com/wp-content/uploads/2023/07/Crescent-Kao-60px.jpg",
    },
  ];

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
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 6000,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-16 ">
      <section className="w-full max-w-[1200px] mx-auto px-4.5">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => {
            return (
              <div style={{ width: "90%" }} className="px-4.5" key={index}>
                <div className="border-2 border-orange-500 cursor-pointer p-8 mx-4.5">
                  <p className="leading-6 text-[20px]">{testimonial.comment}</p>

                  {/* below-div */}
                  <div className="flex mt-6">
                    {/* Image */}
                    <div className="border-r-2 pr-6 border-orange-500">
                      <img
                        src={testimonial.img}
                        alt=""
                        width={60}
                        height={60}
                      />
                    </div>
                    <h3 className="pl-6 flex items-center font-bold">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="w-full flex justify-end max-w-[1200px] pr-[1%]">
          <div onClick={previous}>
            <ArrowBackIcon />
          </div>
          <div onClick={next}>
            <ArrowForwardIcon />
          </div>
        </div>
      </section>
    </div>
  );
}
// }

export default Testimonials;
