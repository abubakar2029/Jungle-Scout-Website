import { FeatureActions } from "./ActionTypes";

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
interface FeatureInfo {
  heading: string;
  text: string;
  img: string;
  TextimageLeft?: boolean;
  new?: boolean;
}
interface Features {
  name: string;
  Header: heroSection;
  Overview: string;
  Info: FeatureInfo[];
}
export const FeaturePages: Features[] = [
  {
    name: FeatureActions.SALES_ANALYTICS,
    Header: {
      bgImg:
        "https://www.junglescout.com/wp-content/uploads/2019/10/header-bg-stripes-orange.jpg",
      heading: "Your financial command center",
      getStartedURL: "/",
      heroImg:
        "https://www.junglescout.com/wp-content/uploads/2023/09/js_hero-image_sales-analytics@2x-1.png",
      iconImg:
        "https://www.junglescout.com/wp-content/uploads/2020/07/sales-analytics@2x-1.png",
      name: "SALES ANALYTICS",
      text: "See profits instantly, keep track of Amazon fees, and understand the financial health of your business.",
      watchVideoURL: "/",
    },
    Overview:
      "Sales Analytics organizes and tracks all your Amazon sales data in real time so you can focus on profit-building and cost-saving strategies to earn more money with Amazon.",
    Info: [
      {
        heading: "See current and historical sales data with Profit Overview",
        text: "View sales and profit data from a company perspective or a multi-product dashboard. See units sold, net margin, ROI, revenue, and more. Compare sales over time with custom date ranges to understand how promotions, refunds, and other variables impact your bottom line.",
        img: "https://www.junglescout.com/wp-content/uploads/2020/07/sales-analytics-multi-product-view@2x.png",
      },
      {
        heading: "See current and historical sales data with Profit Overview",
        text: "View sales and profit data from a company perspective or a multi-product dashboard. See units sold, net margin, ROI, revenue, and more. Compare sales over time with custom date ranges to understand how promotions, refunds, and other variables impact your bottom line.",
        img: "https://www.junglescout.com/wp-content/uploads/2020/07/sales-analytics-multi-product-view@2x.png",
        TextimageLeft: true,
      },
      {
        heading: "See current and historical sales data with Profit Overview",
        text: "View sales and profit data from a company perspective or a multi-product dashboard. See units sold, net margin, ROI, revenue, and more. Compare sales over time with custom date ranges to understand how promotions, refunds, and other variables impact your bottom line.",
        img: "https://www.junglescout.com/wp-content/uploads/2020/07/sales-analytics-multi-product-view@2x.png",
      },
    ],
  },
  {
    name: FeatureActions.LISTING_BUILDER,
    Header: {
      bgImg:
        "https://www.junglescout.com/wp-content/uploads/2020/03/group-4@2x.png",
      getStartedURL: "/",
      heading: "Optimize your listings instantly",
      text: "Build better Amazon listings and rank higher with a proven keyword strategy.",
      name: "LISTING BUILDER",
      heroImg:
        "https://www.junglescout.com/wp-content/uploads/2023/09/hero-image@2x.png",
      iconImg:
        "https://www.junglescout.com/wp-content/uploads/2020/07/listing-builder@2x.png",
      watchVideoURL: "/",
    },
    Overview:
      "Jungle Scout’s Listing Builder helps you compete for critical ranking on Amazon search results with data-driven listings. Optimize your listings with recommended keywords and see your rankings improve!",
    Info: [
      {
        heading: "Let AI write your listing",
        text: "Listing Builder’s AI Assist can help you write a compelling listing in the click of a button. Using relevant keywords from your Keyword Bank, AI Assist automatically generates a title, description, and list of features.",
        new: true,
        img: "https://www.junglescout.com/wp-content/uploads/2023/03/image-1_listing-builder-ai@2x-1.png",
      },
      {
        heading: "Get an instant rating for your listing",
        text: "Check how likely your listing is to rank and convert sales with Jungle Scout’s AI-driven Listing Optimization Score. This real-time grade measures product title, description, key features, keywords, images, and more so you have instant live feedback to adjust your listing.",
        img: "https://www.junglescout.com/wp-content/uploads/2023/01/image-1_instant-rating@2x.jpg",
        TextimageLeft: true,
      },
    ],
  },
  // PRODUCT TRACKER
  {
    name: FeatureActions.PRODUCT_TRACKER,
    Header: {
      bgImg:
        "https://www.junglescout.com/wp-content/uploads/2019/10/header-bg-stripes-orange.jpg",
      heading: "Centralize your product research",
      name: "PRODUCT TRACKER",
      heroImg:
        "https://www.junglescout.com/wp-content/uploads/2023/11/product-tracker_hero-img@2x.png",
      text: "Skip spreadsheets and data logging. Easily organize, group, and compare product ideas and sales metrics, and confidently pick your next product to sell on Amazon.",
      getStartedURL: "/",
      watchVideoURL: "/",
      iconImg:
        "https://www.junglescout.com/wp-content/uploads/2020/09/product-tracker@2x.png",
    },
    Overview:
      "Product Tracker is the most comprehensive solution for tracking how a group of products performs over time. Monitor sales to identify viable opportunities and create a strategy for success on Amazon.",
    Info: [
      {
        heading: "Track real-time sales",
        text: "Closely track the average sales, revenue, and Best Seller Rank of a product or group of products. Gain valuable insights into the market space as you follow products over time so you can make informed decisions for your Amazon business.",
        img: "https://www.junglescout.com/wp-content/uploads/2023/11/product-tracker_track-real-time-sales@1.5x.png",
      },
      {
        heading: "Easily organize products",
        text: "Create groups of similar products to see a roll-up of /metrics on a clean interface. Drag and drop to change the order of each product within the group and customize columns to see the data that matters most to you.",
        img: "https://www.junglescout.com/wp-content/uploads/2023/11/product-tracker_easily-organize-products@1.5x.png",
        TextimageLeft: true,
      },
      {
        heading: "Observe key metrics",
        text: "See key metrics for each tracked product like average daily sales, price, rank, and more. Dive deeper and view inventory, units sold, rank, and Buy Box price over time on a graph to understand the product’s competitive landscape.",
        img: "https://www.junglescout.com/wp-content/uploads/2023/11/product-tracker_observe-key-metrics@1.5x.png",
      },
    ],
  },
  // PRODUCT DATABASE
  {
    name: FeatureActions.PRODUCT_DATABASE,
    Header: {
      bgImg:
        "https://www.junglescout.com/wp-content/uploads/2019/07/group-7.png",
      heading: "Product research starts here",
      getStartedURL: "/",
      heroImg:
        "https://www.junglescout.com/wp-content/uploads/2020/06/product-database-hero-image.png",
      iconImg:
        "https://www.junglescout.com/wp-content/uploads/2020/07/product-database@2x.png",
      name: "PRODUCT DATABASE",
      text: "Whether you’re just starting out or a seasoned seller, quickly reveal profitable opportunities on Amazon with our advanced filters.",
      watchVideoURL: "/",
    },
    Overview:
      "Product Database is a searchable catalog of 475 million products pulled directly from Amazon. Organize, explore, and evaluate product ideas.",
    Info: [
      {
        heading: "Generate product ideas",
        text: "Generate ideas in seconds and start discovering products that match your specific search criteria. Sort by categories, estimated sales, sales rank, revenue, and more to quickly reveal profitable opportunities.",
        img: "https://www.junglescout.com/wp-content/uploads/2020/06/product-dtb-start-research.png",
      },
      {
        heading: "Uncover Amazon potential",
        text: "Narrow the search for a winning idea. Product Database points you toward promising opportunities, like products with high competition and low ratings or products with underperforming listings.",
        img: "https://www.junglescout.com/wp-content/uploads/2020/06/product-dtb-outside-the-box.png",
        TextimageLeft: true,
      },
      {
        heading: "Factor in the fees",
        text: "Keep track of overhead costs and Amazon seller fees with Jungle Scout’s FBA Profit Calculator. Factor these calculations into your research so you can confidently invest in the right opportunity.",
        img: "https://www.junglescout.com/wp-content/uploads/2020/06/product-dtb-factor-fees.png",
      },
    ],
  },
  // BROWSER EXTENSION
  {
    name:FeatureActions.BROWSER_EXTENSION,
    Header: {
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
    },
    Overview:
      "You can add the power of Jungle Scout to your web browser by installing our extension for either Chrome or Firefox. Evaluate new opportunities, forecast product sales, and request reviews with the most robust browser extension for Amazon.",
    Info: [
      {
        heading: "Get key product insights",
        text: "Jungle Scout populates key insights including product demand, competitive data, and profit projections directly from Amazon for the product page or search results page you’re viewing.",
        img: "https://www.junglescout.com/wp-content/uploads/2023/05/js-extension-chrome-key-product-insights-img-en@2x.png",
      },
      {
        heading: "Validate your product ideas",
        text: "Determine if a product is a worthwhile investment with the most accurate real-time data. Our AccuSales™ algorithm analyzes over 1 billion data points daily to take the guesswork out of product research — see historical sales, historical pricing, and monthly sales estimates instantly.",
        img: "https://www.junglescout.com/wp-content/uploads/2022/12/js-extension-Validate-ideas-img-en@2x.png",
        TextimageLeft: true,
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
        TextimageLeft: true,
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
        TextimageLeft: true,
      },
      {
        heading: "Request reviews",
        text: "Easily send requests for product reviews from your customers with Jungle Scout. Now, FBA sellers can send individual requests to all eligible customers directly through Seller Central in just one click.",
        img: "https://www.junglescout.com/wp-content/uploads/2020/06/extension-feature-bulkreview-1024x679.png",
      },
    ],
  }
];
// export const BrowserExtension: {
//   Header: heroSection;
//   Overview: string;
//   Info: FeatureInfo[];
// } = {
//   Header: {
//     bgImg:
//       "https://www.junglescout.com/wp-content/uploads/2019/10/header-bg-stripes-orange.jpg",
//     heroImg:
//       "https://www.junglescout.com/wp-content/uploads/2023/05/js-extension-chrome-hero-img-en@2x.png",
//     heading: "Assess a product’s potential in seconds",
//     name: "BROWSER EXTENSION",
//     iconImg:
//       "https://www.junglescout.com/wp-content/uploads/2020/07/chrome-extension@2x.png",
//     text: "Validate product ideas as you browse Amazon.",
//     getStartedURL: "/",
//     watchVideoURL: "/",
//   },
//   Overview:
//     "You can add the power of Jungle Scout to your web browser by installing our extension for either Chrome or Firefox. Evaluate new opportunities, forecast product sales, and request reviews with the most robust browser extension for Amazon.",
//   Info: [
//     {
//       heading: "Get key product insights",
//       text: "Jungle Scout populates key insights including product demand, competitive data, and profit projections directly from Amazon for the product page or search results page you’re viewing.",
//       img: "https://www.junglescout.com/wp-content/uploads/2023/05/js-extension-chrome-key-product-insights-img-en@2x.png",
//     },
//     {
//       heading: "Validate your product ideas",
//       text: "Determine if a product is a worthwhile investment with the most accurate real-time data. Our AccuSales™ algorithm analyzes over 1 billion data points daily to take the guesswork out of product research — see historical sales, historical pricing, and monthly sales estimates instantly.",
//       img: "https://www.junglescout.com/wp-content/uploads/2022/12/js-extension-Validate-ideas-img-en@2x.png",
//       TextimageLeft: true,
//     },
//     {
//       heading: "Grade potential with Opportunity Score",
//       text: "Quickly validate or eliminate any product idea by using our proprietary Opportunity Score. This metric blends demand, competition, and listing quality data to determine a product’s potential.",
//       img: "https://www.junglescout.com/wp-content/uploads/2022/12/js-extension-chrome-opp-score-img-en@2x.png",
//     },
//     {
//       heading: "Customizable overlays on Amazon search pages",
//       text: "Display ASIN metrics directly on Amazon search pages and top 100 category pages. Customize your view to see the data that’s most important for your business like brand, price, monthly sales, rating, and Listing Quality Score.",
//       img: "https://www.junglescout.com/wp-content/uploads/2023/05/js-extension-chrome-customise-overlays-img-en@2x.png",
//       new: true,
//       TextimageLeft: true,
//     },
//     {
//       heading: "View valuable data directly on a product page",
//       text: "See important product information embedded directly on a product listing page. View graphs of historical data like monthly sales, price, and rank as well as current data like product fees, category rank, Listing Quality Score, and more. Easily add products to Keyword Scout and Product Tracker with a click of a button.",
//       img: "https://www.junglescout.com/wp-content/uploads/2023/05/js-extension-chrome-customise-overlays-img-en@2x.png",
//       new: true,
//     },
//     {
//       heading: "Get a sales overview on Seller Central",
//       text: "View a graphical breakdown of organic sales vs. PPC sales directly on your Seller Central home page — a capability exclusive to Jungle Scout. Sort by daily, monthly, or custom date ranges and see other product metrics like cost per click, page views, and impressions.",
//       img: "https://www.junglescout.com/wp-content/uploads/2021/05/extension_get-a-sales-overview-on-seller-central@2x.png",
//       TextimageLeft: true,
//     },
//     {
//       heading: "Request reviews",
//       text: "Easily send requests for product reviews from your customers with Jungle Scout. Now, FBA sellers can send individual requests to all eligible customers directly through Seller Central in just one click.",
//       img: "https://www.junglescout.com/wp-content/uploads/2020/06/extension-feature-bulkreview-1024x679.png",
//     },
//   ],
// };

// export const ProductDatabase: {
//   Header: heroSection;
//   Overview: string;
//   Info: FeatureInfo[];
// } = {
//   Header: {
//     bgImg: "https://www.junglescout.com/wp-content/uploads/2019/07/group-7.png",
//     heading: "Product research starts here",
//     getStartedURL: "/",
//     heroImg:
//       "https://www.junglescout.com/wp-content/uploads/2020/06/product-database-hero-image.png",
//     iconImg:
//       "https://www.junglescout.com/wp-content/uploads/2020/07/product-database@2x.png",
//     name: "PRODUCT DATABASE",
//     text: "Whether you’re just starting out or a seasoned seller, quickly reveal profitable opportunities on Amazon with our advanced filters.",
//     watchVideoURL: "/",
//   },
//   Overview:
//     "Product Database is a searchable catalog of 475 million products pulled directly from Amazon. Organize, explore, and evaluate product ideas.",
//   Info: [
//     {
//       heading: "Generate product ideas",
//       text: "Generate ideas in seconds and start discovering products that match your specific search criteria. Sort by categories, estimated sales, sales rank, revenue, and more to quickly reveal profitable opportunities.",
//       img: "https://www.junglescout.com/wp-content/uploads/2020/06/product-dtb-start-research.png",
//     },
//     {
//       heading: "Uncover Amazon potential",
//       text: "Narrow the search for a winning idea. Product Database points you toward promising opportunities, like products with high competition and low ratings or products with underperforming listings.",
//       img: "https://www.junglescout.com/wp-content/uploads/2020/06/product-dtb-outside-the-box.png",
//       TextimageLeft: true,
//     },
//     {
//       heading: "Factor in the fees",
//       text: "Keep track of overhead costs and Amazon seller fees with Jungle Scout’s FBA Profit Calculator. Factor these calculations into your research so you can confidently invest in the right opportunity.",
//       img: "https://www.junglescout.com/wp-content/uploads/2020/06/product-dtb-factor-fees.png",
//     },
//   ],
// };

// export const ProductTracker: {
//   Header: heroSection;
//   Overview: string;
//   Info: FeatureInfo[];
// } = {
//   Header: {
//     bgImg:
//       "https://www.junglescout.com/wp-content/uploads/2019/10/header-bg-stripes-orange.jpg",
//     heading: "Centralize your product research",
//     name: "PRODUCT TRACKER",
//     heroImg:
//       "https://www.junglescout.com/wp-content/uploads/2023/11/product-tracker_hero-img@2x.png",
//     text: "Skip spreadsheets and data logging. Easily organize, group, and compare product ideas and sales metrics, and confidently pick your next product to sell on Amazon.",
//     getStartedURL: "/",
//     watchVideoURL: "/",
//     iconImg:
//       "https://www.junglescout.com/wp-content/uploads/2020/09/product-tracker@2x.png",
//   },
//   Overview:
//     "Product Tracker is the most comprehensive solution for tracking how a group of products performs over time. Monitor sales to identify viable opportunities and create a strategy for success on Amazon.",
//   Info: [
//     {
//       heading: "Track real-time sales",
//       text: "Closely track the average sales, revenue, and Best Seller Rank of a product or group of products. Gain valuable insights into the market space as you follow products over time so you can make informed decisions for your Amazon business.",
//       img: "https://www.junglescout.com/wp-content/uploads/2023/11/product-tracker_track-real-time-sales@1.5x.png",
//     },
//     {
//       heading: "Easily organize products",
//       text: "Create groups of similar products to see a roll-up of /metrics on a clean interface. Drag and drop to change the order of each product within the group and customize columns to see the data that matters most to you.",
//       img: "https://www.junglescout.com/wp-content/uploads/2023/11/product-tracker_easily-organize-products@1.5x.png",
//       TextimageLeft: true,
//     },
//     {
//       heading: "Observe key metrics",
//       text: "See key metrics for each tracked product like average daily sales, price, rank, and more. Dive deeper and view inventory, units sold, rank, and Buy Box price over time on a graph to understand the product’s competitive landscape.",
//       img: "https://www.junglescout.com/wp-content/uploads/2023/11/product-tracker_observe-key-metrics@1.5x.png",
//     },
//   ],
// };

// export const ListingBuilder: {
//   Header: heroSection;
//   Overview: string;
//   Info: FeatureInfo[];
// } = {
//   Header: {
//     bgImg:
//       "https://www.junglescout.com/wp-content/uploads/2020/03/group-4@2x.png",
//     getStartedURL: "/",
//     heading: "Optimize your listings instantly",
//     text: "Build better Amazon listings and rank higher with a proven keyword strategy.",
//     name: "LISTING BUILDER",
//     heroImg:
//       "https://www.junglescout.com/wp-content/uploads/2023/09/hero-image@2x.png",
//     iconImg:
//       "https://www.junglescout.com/wp-content/uploads/2020/07/listing-builder@2x.png",
//     watchVideoURL: "/",
//   },
//   Overview:
//     "Jungle Scout’s Listing Builder helps you compete for critical ranking on Amazon search results with data-driven listings. Optimize your listings with recommended keywords and see your rankings improve!",
//   Info: [
//     {
//       heading: "Let AI write your listing",
//       text: "Listing Builder’s AI Assist can help you write a compelling listing in the click of a button. Using relevant keywords from your Keyword Bank, AI Assist automatically generates a title, description, and list of features.",
//       new: true,
//       img: "https://www.junglescout.com/wp-content/uploads/2023/03/image-1_listing-builder-ai@2x-1.png",
//     },
//     {
//       heading: "Get an instant rating for your listing",
//       text: "Check how likely your listing is to rank and convert sales with Jungle Scout’s AI-driven Listing Optimization Score. This real-time grade measures product title, description, key features, keywords, images, and more so you have instant live feedback to adjust your listing.",
//       img: "https://www.junglescout.com/wp-content/uploads/2023/01/image-1_instant-rating@2x.jpg",
//       TextimageLeft: true,
//     },
//   ],
// };

// export const SalesAnalytics: {
//   Header: heroSection;
//   Overview: string;
//   Info: FeatureInfo[];
// } = {
//   Header: {
//     bgImg:
//       "https://www.junglescout.com/wp-content/uploads/2019/10/header-bg-stripes-orange.jpg",
//     heading: "Your financial command center",
//     getStartedURL: "/",
//     heroImg:
//       "https://www.junglescout.com/wp-content/uploads/2023/09/js_hero-image_sales-analytics@2x-1.png",
//     iconImg:
//       "https://www.junglescout.com/wp-content/uploads/2020/07/sales-analytics@2x-1.png",
//     name: "SALES ANALYTICS",
//     text: "See profits instantly, keep track of Amazon fees, and understand the financial health of your business.",
//     watchVideoURL: "/",
//   },
//   Overview:
//     "Sales Analytics organizes and tracks all your Amazon sales data in real time so you can focus on profit-building and cost-saving strategies to earn more money with Amazon.",
//   Info: [
//     {
//       heading: "See current and historical sales data with Profit Overview",
//       text: "View sales and profit data from a company perspective or a multi-product dashboard. See units sold, net margin, ROI, revenue, and more. Compare sales over time with custom date ranges to understand how promotions, refunds, and other variables impact your bottom line.",
//       img: "https://www.junglescout.com/wp-content/uploads/2020/07/sales-analytics-multi-product-view@2x.png",
//     },
//     {
//       heading: "See current and historical sales data with Profit Overview",
//       text: "View sales and profit data from a company perspective or a multi-product dashboard. See units sold, net margin, ROI, revenue, and more. Compare sales over time with custom date ranges to understand how promotions, refunds, and other variables impact your bottom line.",
//       img: "https://www.junglescout.com/wp-content/uploads/2020/07/sales-analytics-multi-product-view@2x.png",
//       TextimageLeft: true,
//     },
//     {
//       heading: "See current and historical sales data with Profit Overview",
//       text: "View sales and profit data from a company perspective or a multi-product dashboard. See units sold, net margin, ROI, revenue, and more. Compare sales over time with custom date ranges to understand how promotions, refunds, and other variables impact your bottom line.",
//       img: "https://www.junglescout.com/wp-content/uploads/2020/07/sales-analytics-multi-product-view@2x.png",
//     },
//   ],
// };
