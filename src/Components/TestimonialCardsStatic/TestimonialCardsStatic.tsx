import React from "react";
import { TestimonialCardsStaticProps } from "../../entities/Types";

function TestimonialCardsStatic(props: TestimonialCardsStaticProps) {
  const data = props.testimonialsData;
  return (
    <section className="flex flex-wrap justify-center mt-12 gap-x-1 bg-transparent max-md:-mx-4">
      {data?.map((item, index) => {
        return (
          <div className="sm:w-5/6 px-4.5 md:w-[49%] min-[992px]:w-[32%] max-lg:mb-6 max max-md:mt-4 w-full " key={index}>
            <div className="py-12 px-6 text-center  h-full bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.2)]   rounded-sm">
              {/* PROFILE-IMG */}
              <div className="flex justify-center">
                <img
                  src={item.userImg}
                  alt=""
                  className="max-w-[100px] max-h-[100px]"
                />
              </div>
              {/* COMMENT */}
              <div className={`${item.main ? "my-6" : ""}`}>
                <p className="pb-2">{item.comment}</p>
              </div>
              {/* PROFILE-NAME */}
              <div className="flex justify-center">
                <p className="font-extrabold mb-2">{item.userName}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default TestimonialCardsStatic;
