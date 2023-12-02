import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import TextImageRight from "../../Components/TextImageRight/TextImageRight";
import TestimonialCardsStatic from "../../Components/TestimonialCardsStatic/TestimonialCardsStatic";
import { staticTestimonialCards } from "../../Types";
import SolutionsPageHeader from "../../Components/SolutionsPageHeader/SolutionsPageHeader";
import { SolutionPages } from "../../SolutionsData";
import * as Types from "../../Types";
import ResourcesStaticShowCase from "../../Components/ResourcesStaticShowCase/ResourcesStaticShowCase";
import StaticPopularContentCards from "../../Components/StaticPopularContentCards/StaticPopularContentCards";
import CustomerRating from "../../Components/CustomerRating/CustomerRating";
import GetStarted3 from "../../Components/GetStarted3/GetStarted3";
function StartSellingOnAmazon() {
  const Header: Types.Header = {
    bgImg:
      "https://www.junglescout.com/wp-content/uploads/2023/07/selling-on-amazon_hero-background-img_320@2x.jpg",
    getStartedURL: "/",
    heading: "Start selling on Amazon",
    features: [
      "Find a high-demand product to sell",
      "Build a profitable business",
      "Get the support you need every step of the way",
    ],
    text: "Make your selling journey easier with Jungle Scout’s helpful tools and tips.",
    heroImg:
      "https://www.junglescout.com/wp-content/uploads/2023/07/selling-on-amazon_hero-img@2x.png",
  };
  const getStartedSection: Types.getStartedSection = {
    title: "Ready to Begin Your Amazon Selling Journey?",
    title2: "Kickstart Your Success with Jungle Scout!",
    link: "/",
    bgImg:
      "https://www.junglescout.com/wp-content/uploads/2023/09/js_cta-banner_dektop@1.5x.png",
  };
  const Info: Types.InfoItem[] = [
    {
      heading: "Learn what’s selling on Amazon",
      text: "Discover profitable products with Opportunity Finder. Uncover high-demand, low-competition keywords to find products with maximum profit potential on Amazon. We help you identify trends and filter opportunities using AI-driven insights so you can confidently craft your product strategy.",
      buttonText: "Explore Opportunity Finder",
      buttonLink: "/",
      img: "https://www.junglescout.com/wp-content/uploads/2023/07/opp-finder@2x.png",
      TextimageLeft: true,
    },
    {
      heading: "Track how products sell over time",
      text: "Monitor product ideas with Product Tracker. Save and monitor product ideas so you never lose out on an opportunity. Track a product or group of products to evaluate sales over time and spot trends, unexpected spikes, and seasonality.",
      buttonLink: "/",
      buttonText: "Explore Product tracker",
      img: "https://www.junglescout.com/wp-content/uploads/2023/11/product-tracker@2x.jpg",
    },
    {
      TextimageLeft: true,
      heading: "Evaluate product potential",
      text: "Narrow your search with the most comprehensive product research filters, as well as a profit calculator to help you compare price, revenue, and FBA fees for each product opportunity.",
      buttonLink: "/",
      buttonText: "Explore Product Database",
      img: "https://www.junglescout.com/wp-content/uploads/2023/07/extension-product-database@2x.png",
    },
    {
      heading: "Learn as you go",
      text: "Jungle Scout was built by sellers, for sellers. Learn from experts as you launch your business. Our exclusive tutorials and step-by-step guides go beyond the basics and teach you the ins and outs of Amazon. Let’s win together.",
      buttonLink: "/",
      buttonText: "Learn with Academy",
      img: "",
    },
    {
      heading: "Succeed on Amazon",
      text: "Jungle Scout is here to help you succeed on Amazon. Our expert team hosts live onboarding sessions every day to introduce our tools. Plus, get weekly training on features and special topics to master selling on Amazon",
      buttonLink: "/",
      buttonText: "Learn with Academy",
      img: "https://www.junglescout.com/wp-content/uploads/2023/07/succeed-on-amazon@2x.png",
    },
  ];
  const name = "Start selling on Amazon";
  const popularContentData: Types.PopularContentData[] = [
    {
      img: "https://www.junglescout.com/wp-content/uploads/2020/03/how-to-sell-on-fba@2x.png",
      blogLink: "/",
      text: "Read our CEO’s how-to guide for selling on Amazon",
      title: "How to Sell on FBA for Beginners",
      category: "guide",
    },
    {
      title: "Million Dollar Case Study",
      blogLink: "/",
      category: "series",
      text: "Follow along as we launch a product in real time",
      img: "https://www.junglescout.com/wp-content/uploads/2021/05/js_million-dollar-case-study@2x-1536x864.png",
    },
    {
      img: "https://www.junglescout.com/wp-content/uploads/2020/03/top-tools@2x.png",
      blogLink: "/",
      category: "blog",
      text: "Read more about keyword research and the tools to improve your product rank",
      title: "The Top Tools of Amazon Keyword Research in 2023",
    },
  ];
  const staticTestimonialsData: Types.staticTestimonialCards = [
    {
      userImg:
        "https://www.junglescout.com/wp-content/uploads/2020/10/kunal-pahwa-150x150.png",
      comment:
        "“The Academy paid for the subscription itself. So did the Product Database. Everything else is a bonus!”",
      userName: "Kunal Pahwa",
    },
    {
      userImg:
        "https://www.junglescout.com/wp-content/uploads/2020/10/ryan-gold@2x.png",
      comment:
        "“It gives me more confidence in a chosen product. Without it, I probably would be in a “finding product” paralysis. Also, the JS Academy helps a lot by suggesting many lessons for eCommerce beginners.”",
      main: true,
      userName: "Tanya Beall",
    },
    {
      userImg:
        "https://www.junglescout.com/wp-content/uploads/2020/10/tanya-beall-150x150.png",
      comment:
        "“It’s a perfect tool and template to start selling on Amazon. It provides structure to a new business without controlling it.”",
      userName: "Ryan Gold",
    },
  ];
  const getStarted: Types.GetStarted3 = {
    bgImg:
      "https://www.junglescout.com/wp-content/uploads/2023/09/js_cta-banner_dektop@1.5x.png",
    getStartedLink: "/",
    heading1: "Ready to Begin Your Amazon Selling Journey?",
    heading2: "Kickstart Your Success with Jungle Scout!",
  };
  return (
    <div>
      <SolutionsPageHeader pageHeader={Header} />
      <CustomerRating />
      {Info.map((item, index) => {
        return (
          <Fragment key={index}>
            <TextImageRight data={item} />
          </Fragment>
        );
      })}
      <GetStarted3 getStarted={getStarted} />
      {/* TESTIMONIAL CARDS STATIC */}
      <section className="bg-neutral-100 py-12">
        <div className="py-12 px-4.5 min-[1200px]:max-w-[1200px] min-[992px]:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto">
          <h1 className="text-32 text-center mb-4 font-extrabold">
            Join over 600,000 entrepreneurs already using Jungle Scout
          </h1>
          <TestimonialCardsStatic testimonialsData={staticTestimonialsData} />
        </div>
      </section>
      <ResourcesStaticShowCase />
      <StaticPopularContentCards PopularContentData={popularContentData} />
    </div>
  );
}

export default StartSellingOnAmazon;
