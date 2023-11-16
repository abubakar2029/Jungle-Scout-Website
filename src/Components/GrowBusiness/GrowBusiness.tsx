import React, {MouseEventHandler} from "react";
import Button from "../Button/Button";

function GrowBusiness() {
  // const
  return (
    <div
      className="w-full bg-cover"
      style={{
        backgroundImage: `url('https://www.junglescout.com/wp-content/uploads/2023/07/smb-cta-background_1440.jpg')`,
      }}
    >
      <section className="lg:py-16 py-8 px-4.5 flex flex-col">
        <h1 className="lg:text-32 text-[24px] text-white ">
          Grow your Amazon business with Jungle Scout
        </h1>
        <Button
          // On_Click={}
          href="/"
          label="Get Started"
          width="24"
          height="4"
          bgColor="white"
          textColor="black"
        />
      </section>
    </div>
  );
}

export default GrowBusiness;
