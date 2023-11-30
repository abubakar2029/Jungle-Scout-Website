import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CenterMode = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "230px",
    slidesToShow: 1,
    speed: 500,
    // adaptiveHeight: true,
    arrows: true,
  };

  const t = [1, 2, 3, 4, 5, 6, 7];
  const slidesData: {
    img: string;
    text: string;
    name: string;
    position: string;
    authorImg: string;
    authorImgConfig: {
      width: number;
      height: number;
    };
  }[] = [
    {
      text: "“My team loves Jungle Scout as it is the best Amazon software out there. I love Jungle Scout’s creator, Greg Mercer. He has a teacher’s heart. He doesn’t just create a tool. He educates his users all about succeeding on Amazon and using Amazon as a tool for personal success”",
      authorImg:
        "https://www.junglescout.com/wp-content/uploads/2018/10/robert-thumbnail@2x.png",
      img: "https://www.junglescout.com/wp-content/uploads/2018/10/logo-richdad@2x.jpg",
      name: "Robert Kiyosaki ",
      position: "CEO, Founder",
      authorImgConfig: {
        height: 45,
        width: 281,
      },
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2018/10/logo-amazingseller@2x.png",
      text: "“Jungle Scout is the ONE tool I can not live without. There’s ways to use it that simply blow you away once you realize the power of what they can do for your business. A must-have tool for any Amazon seller!”",
      authorImg:
        "https://www.junglescout.com/wp-content/uploads/2018/10/scott-thumbnail@2x.png",
      name: "Scott Voelker",
      position: "Author,The Amazing Seller",
      authorImgConfig: {
        height: 71,
        width: 147,
      },
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2018/10/logo-privatelabelpodcast@2x.png",
      text: "“Jungle Scout is how I start all of my product research. It saves my team and I countless hours each and every month. Honestly, I don’t know what we did without it!”",
      authorImg:
        "https://www.junglescout.com/wp-content/uploads/2018/10/kevin-thumbnail@2x.png",
      name: "Kevin Rizer",
      position: "CEO, Founder",
      authorImgConfig: {
        height: 75,
        width: 114,
      },
    },
  ];
  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings}>
        {slidesData.map((obj, index) => (
          <div className="bg-sky-500 px-2 h-[400px] sm:h-[350px] md:h-[300px] lg:h-[250px] py-3" key={index}>
            <div className="bg-white px-7.5">
              {/* top-Image-div */}
              <div className="h-[20%] flex items-end bg-orange-300">
                <img
                  src={obj.img}
                  alt=""
                  // height={obj.authorImgConfig.height}
                  className={`!max-h-[100%] !w-${obj.authorImgConfig.width}`}
                  // className={`max-h-${obj.authorImgConfig.height} !max-h-[100%] !w-${obj.authorImgConfig.width}`}
                  // style={{
                  //   maxHeight: `${obj.authorImgConfig.height}px !important`,
                  // }}
                />
              </div>
              {/* 2nd-div content */}
              <div className="!h-[60%] bg-green-300">
                <p className="text-center px-8 mb-6">{obj.text}</p>
              </div>
              {/* last-div-author */}
              <div className="flex justify-center items-center h-[20%]">
                <img src={obj.authorImg} alt="" width={62} height={62} />
                <div className="font-bold text-left pl-2 mb-4">
                  <h3>{obj.name}</h3>
                  <h3>{obj.position}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CenterMode;
