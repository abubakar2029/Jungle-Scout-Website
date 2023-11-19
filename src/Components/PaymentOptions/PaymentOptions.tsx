import React from "react";

function PaymentOptions() {
  let paymentCardImages: { name: string; img: string }[] = [
    {
      name: "VISA",
      img: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/pricing-v2/icon-visa_2eb8649df8c813c1b67c.png",
    },
    {
      name: "MASTERCARD",
      img: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/pricing-v2/icon-mastercard_90d511ea82a03b3373d7.png",
    },
    {
      name: "DISCOVER",
      img: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/pricing-v2/icon-discover_90380a4d95f846ac8b65.png",
    },
    {
      name: "AMEX",
      img: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/pricing-v2/icon-amex_cd783474a7596a0c3e98.png",
    },
    {
      name: "STRIPE",
      img: "https://www.junglescout.com/wp-content/themes/wolfpack-v2/dist/images/pricing-v2/powered-by-stripe_3579bacc86380c62e341.png",
    },
  ];
  return (
    <div>
      <section className="flex justify-center flex-col items-center">
        <div className="mb-6 flex justify-center">
          {paymentCardImages.map((card, index) => {
            console.log("Comparison", card.name === "STRIPE");

            return (
              <img
                src={card.img}
                alt={card.name}
                key={index}
                className={`mr-1.5 ${
                  card.name === "STRIPE"
                    ? "w-[100px] !h-[22px]"
                    : "w-[49px] h-[31px]"
                }`}
              />
            );
          })}
        </div>
        <p className="mb-4 text-[12px] leading-6">
          We offer a 7-day money-back guarantee
        </p>
      </section>
    </div>
  );
}

export default PaymentOptions;
