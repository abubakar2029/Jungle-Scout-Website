import React, { MouseEventHandler } from "react";
import Button from "../NavBtn/NavBtn";

function GrowBusiness() {
  return (
    <div
      className="w-full bg-cover"
      style={{
        backgroundImage: `url('https://www.junglescout.com/wp-content/uploads/2023/07/smb-cta-background_1440.jpg')`,
      }}
    >
      <section className="lg:py-16 py-8 px-4.5 flex flex-col justify-center items-center">
        <h1 className="lg:text-32 text-[24px] text-white ">
          Grow your Amazon business with Jungle Scout
        </h1>
        <Button
          // On_Click={}
          btn={{
            hoverBgColor: "",
            href: "",
            shadow: false,
            text: "Get Started",
            style: {
              width: "96px",
              height: "16px",
              backgroundColor: "white",
              color: "black",
              fontSize: "medium",
              fontWeight: 600,
              padding: "10px 12px",
            },
          }}
        />
      </section>
    </div>
  );
}

export default GrowBusiness;
