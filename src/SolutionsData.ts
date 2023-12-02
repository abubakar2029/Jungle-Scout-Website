import { SolutionsActions } from "./ActionTypes";
import * as Types from "./Types";

export const SolutionPages: Types.SolutionPage[] = [
  // LAUNCH_MY_PRODUCT
  {
    pageName: SolutionsActions.LAUNCH_MY_PRODUCT,
    name: "Launch your product",
    Header: {
      bgImg:
        "https://www.junglescout.com/wp-content/uploads/2020/10/launching-background@2x-1.png",
      iconImg: "",
      name: "",
      heading: "Launch your product",
      text: "Kick-start your business with a successful product launch.",
      heroImg:
        "https://www.junglescout.com/wp-content/uploads/2020/10/launching-product-hero@3x.png",
      features: [
        "Find a reliable supplier",
        "Explore competitor keyword strategy",
        "Craft data-driven listings",
        "Send customers promotions",
        "Get early reviews to jumpstart sales",
      ],
      getStartedURL: "/",
    },
    Info: [
      {
        heading: "Refine your keyword strategy",
        text: "Get your product noticed with a better keyword strategy. Use advanced filters to include/exclude terms, see estimated PPC bids, and more. Reverse-search ASINs to see which top keywords your competitors are using, and leverage insights to build keyword lists and add them into your own listing.",
        img: "https://www.junglescout.com/wp-content/uploads/2022/09/keyword-scout@2x-1.png",
        blogLink: "/",
        blogLinktext: "lorem",
      },
      {
        heading: "Increase listing conversion",
        text: "Create data-driven listings with curated keyword lists to improve your product’s rank. Our real-time Listing Optimization Score grades your listing and ensures you’re maximizing keyword selections. Sync your listing changes and publish them directly to Seller Central.",
        img: "https://www.junglescout.com/wp-content/uploads/2020/10/launching-listing-builder@3x.png",
        blogLink: "/",
        blogLinktext: "lorem",
      },
      {
        heading: "Target customers with promotional campaigns",
        text: "Boost your listing’s rank and credibility with more reviews to drive sales. Promote your product launch with special offers to increase your chances of earning positive reviews.",
        img: "https://www.junglescout.com/wp-content/uploads/2020/10/launching-promo-email@3x-1536x985.png",
        blogLink: "/",
        blogLinktext: "lorem",
      },
      {
        heading: "Boost product sales with reviews",
        text: "Never miss the opportunity to earn a review. Jumpstart product sales with critical early reviews. Jungle Scout’s Review Automation feature completely automates the Seller Central review request process so you can ensure every eligible order gets a request",
        img: "https://www.junglescout.com/wp-content/uploads/2020/10/launching-review-automation@3x-1536x1002.png",
        blogLink: "/",
        blogLinktext: "lorem",
      },
    ],
    staticTestimonialsData: [
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
    ],
    popularContentData: [
      {
        img: "https://www.junglescout.com/wp-content/uploads/2020/03/get-reviews-on-amazon@2x.png",
        title: "How to Get Reviews on Amazon in 2023",
        text: "Learn ten strategies to earn more Amazon reviews for your business",
        blogLink: "/",
        category: "blog",
      },
      {
        category: "blog",
        img: "https://www.junglescout.com/wp-content/uploads/2020/10/how-to-get-reviews-thumbnail@3x.png",
        title: "Expert Seller Tips to Boost Amazon Sales",
        text: "Get advice and expert tips from Amazon pros to boost your business",
        blogLink: "/",
      },
      {
        img: "https://www.junglescout.com/wp-content/uploads/2020/10/better-listings-thumbnail@3x.png",
        category: "blog",
        title: "Build Better Listings to Drive Sales",
        text: "Learn how to craft compelling listings with keyword-rich content to drive more traffic to your product",
        blogLink: "/",
      },
    ],
    getStartedSection: {
      title: "Ensure your product launch is a success",
      text: "Try Jungle Scout risk-free for 7 days with our money-back guarantee.",
      link: "/",
      gradientFrom: "",
      gradientTo: "",
    },
  },
  // START SELLING ON AMAZON
  {
    Header: {
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
    },
    getStartedSection: {
      title: "Ready to Begin Your Amazon Selling Journey?",
      title2: "Kickstart Your Success with Jungle Scout!",
      link: "/",
      bgImg:
        "https://www.junglescout.com/wp-content/uploads/2023/09/js_cta-banner_dektop@1.5x.png",
    },
    Info: [
      {
        heading: "Learn what’s selling on Amazon",
        text: "Discover profitable products with Opportunity Finder. Uncover high-demand, low-competition keywords to find products with maximum profit potential on Amazon. We help you identify trends and filter opportunities using AI-driven insights so you can confidently craft your product strategy.",
        buttonText: "Explore Opportunity Finder",
        buttonLink: "/",
        img: "https://www.junglescout.com/wp-content/uploads/2023/07/opp-finder@2x.png",
      },
      {
        heading: "Track how products sell over time",
        text: "Monitor product ideas with Product Tracker. Save and monitor product ideas so you never lose out on an opportunity. Track a product or group of products to evaluate sales over time and spot trends, unexpected spikes, and seasonality.",
        buttonLink: "/",
        buttonText: "Explore Product tracker",
        img: "https://www.junglescout.com/wp-content/uploads/2023/11/product-tracker@2x.jpg",
      },
      {
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
    ],
    name: "Start selling on Amazon",
    pageName: SolutionsActions.START_SELLING_ON_AMAZON,
    popularContentData: [
      {
        img: "https://www.junglescout.com/wp-content/uploads/2020/03/how-to-sell-on-fba@2x.png",
        blogLink: "/",
        text: "Read our CEO’s how-to guide for selling on Amazon",
        title: "How to Sell on FBA for Beginners",
        category: "guide",
      },
      {
        title:
          "https://www.junglescout.com/wp-content/uploads/2021/05/js_million-dollar-case-study@2x-1536x864.png",
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
    ],
    staticTestimonialsData: [
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
    ],
  },
];
