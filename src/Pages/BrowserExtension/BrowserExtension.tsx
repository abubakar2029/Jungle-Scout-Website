import React from "react";
import FeaturespageHeader from "../../Components/FeaturespageHeader/FeaturespageHeader";
import FeaturesTopHeading from "../../Components/FeaturesTopHeading/FeaturesTopHeading";
import TextImageRight from "../../Components/TextImageRight/TextImageRight";

function BrowserExtension() {
  interface heroSection {
    bgImg: string;
    heroImg: string;
    heading: string;
    name: string;
    iconImg: string;
    text: string;
    getStartedURL: string;
    watchVideoURL: string;
  }
  const heroSection: heroSection = {
    bgImg:
      "https://www.junglescout.com/wp-content/uploads/2019/10/header-bg-stripes-orange.jpg",
    heroImg:
      "https://www.junglescout.com/wp-content/uploads/2023/05/js-extension-chrome-hero-img-en@2x.png",
    heading: "Assess a product’s potential in seconds",
    name: "BROWSER EXTENSION",
    iconImg:
      "https://www.junglescout.com/wp-content/uploads/2020/07/chrome-extension@2x.png",
    text: "Validate product ideas as you browse Amazon.",
    getStartedURL: "/",
    watchVideoURL: "/",
  };
  const ExtensionOverview = {
    heading: "What is the browser extension?",
    text: "You can add the power of Jungle Scout to your web browser by installing our extension for either Chrome or Firefox. Evaluate new opportunities, forecast product sales, and request reviews with the most robust browser extension for Amazon.",
  };
  const BrowserExtensionInfo = [
    {
      heading: "Get key product insights",
      text: "Jungle Scout populates key insights including product demand, competitive data, and profit projections directly from Amazon for the product page or search results page you’re viewing.",
      img: "https://www.junglescout.com/wp-content/uploads/2023/05/js-extension-chrome-key-product-insights-img-en@2x.png",
    },
    {
      heading: "Validate your product ideas",
      text: "Determine if a product is a worthwhile investment with the most accurate real-time data. Our AccuSales™ algorithm analyzes over 1 billion data points daily to take the guesswork out of product research — see historical sales, historical pricing, and monthly sales estimates instantly.",
      img: "https://www.junglescout.com/wp-content/uploads/2022/12/js-extension-Validate-ideas-img-en@2x.png",
      TextimageLeft:true,
    },
    {
      heading: "Grade potential with Opportunity Score",
      text: "Quickly validate or eliminate any product idea by using our proprietary Opportunity Score. This metric blends demand, competition, and listing quality data to determine a product’s potential.",
      img: "https://www.junglescout.com/wp-content/uploads/2022/12/js-extension-chrome-opp-score-img-en@2x.png",
    },
    {
      heading: "Customizable overlays on Amazon search pages",
      text: "Display ASIN metrics directly on Amazon search pages and top 100 category pages. Customize your view to see the data that’s most important for your business like brand, price, monthly sales, rating, and Listing Quality Score.",
      img: "https://www.junglescout.com/wp-content/uploads/2023/05/js-extension-chrome-customise-overlays-img-en@2x.png",
      new: true,
      TextimageLeft:true,
    },
    {
      heading: "View valuable data directly on a product page",
      text: "See important product information embedded directly on a product listing page. View graphs of historical data like monthly sales, price, and rank as well as current data like product fees, category rank, Listing Quality Score, and more. Easily add products to Keyword Scout and Product Tracker with a click of a button.",
      img: "https://www.junglescout.com/wp-content/uploads/2023/05/js-extension-chrome-customise-overlays-img-en@2x.png",
      new: true,
    },
    {
      heading: "Get a sales overview on Seller Central",
      text: "View a graphical breakdown of organic sales vs. PPC sales directly on your Seller Central home page — a capability exclusive to Jungle Scout. Sort by daily, monthly, or custom date ranges and see other product metrics like cost per click, page views, and impressions.",
      img: "https://www.junglescout.com/wp-content/uploads/2021/05/extension_get-a-sales-overview-on-seller-central@2x.png",
      TextimageLeft:true,
    },
    {
      heading: "Request reviews",
      text: "Easily send requests for product reviews from your customers with Jungle Scout. Now, FBA sellers can send individual requests to all eligible customers directly through Seller Central in just one click.",
      img: "https://www.junglescout.com/wp-content/uploads/2020/06/extension-feature-bulkreview-1024x679.png",
    },
  ];
  return (
    <main>
      <FeaturespageHeader heroSection={heroSection} />
      <FeaturesTopHeading ExtensionOverview={ExtensionOverview} />
      {BrowserExtensionInfo.map((section, index) => {
        console.log("section", section);

        return <TextImageRight data={section} key={index} />;
      })}
    </main>
  );
}

export default BrowserExtension;
