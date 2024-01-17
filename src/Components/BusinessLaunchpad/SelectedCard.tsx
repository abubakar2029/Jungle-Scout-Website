import React from "react";
import * as Entites from "../../entities/BusinessLaunchpad";
import NavBtn from "../NavBtn/NavBtn";

interface SelectedCardProps {
  CardContent: Entites.CardContent;
}
function SelectedCard({ CardContent }: SelectedCardProps) {
  return (
    <section className="grid grid-cols-2 bg-white mx-auto xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full pt-14 pb-12 ">
      {/* left-side */}
      <div className="flex flex-col content-between px-8">
        <figure>
          <img src={CardContent.image} alt={CardContent.imageName} />
        </figure>
        <div>
          <b>Resources</b>
          {/* yahan map chla ga */}
          {CardContent.resources.map((item, index) => {
            return (
              <div key={index}>
                <h6 className="text-blue-700">{item.heading}</h6>
                <p>{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* right-side */}
      <div className="flex flex-col content-between gap-y-4 px-8">
        <figure>
          <img src={CardContent.icon} alt={CardContent.iconName} />
        </figure>
        <h6 className="mb-11">{CardContent.heading}</h6>
        <ol>
          {CardContent.featuresList.map((item, index) => {
            return (
              <li
                key={index}
                // className="flex items-center before:content-['check'] mb-3"
                className="flex items-center before:content-['✓'] before:pr-6 mb-3"
              >
                {item}
              </li>
            );
          })}
        </ol>
        <div>
          <div className="flex gap-x-7 px-4">
            <NavBtn
              btn={{
                hoverBgColor: "rgba(51, 53, 85, 1)",
                href: "",
                shadow: true,
                text: "Learn more",
                style: {
                  backgroundColor: "rgba(10, 12, 51, 1)",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 800,
                  height: "50px",
                  width: "100%",
                  maxWidth: "50%",
                },
              }}
            />
            <NavBtn
              btn={{
                hoverBgColor: "rgba(207, 207, 215, 1)",
                href: "",
                shadow: false,
                text: "Platforum tour",
                style: {
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "16px",
                  fontWeight: 800,
                  height: "50px",
                  width: "100%",
                  maxWidth: "50%",
                  border: "1px solid black",
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedCard;
