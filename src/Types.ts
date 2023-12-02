export interface staticTestimonial {
  userImg: string;
  userName: string;
  comment: string;
  main?: boolean;
}

export type staticTestimonialCards = staticTestimonial[];

export interface TestimonialCardsStaticProps {
  testimonialsData?: staticTestimonialCards;
}

export interface Header {
  bgImg: string;
  iconImg?: string;
  name?: string;
  heading: string;
  text?: string;
  heroImg: string;
  features?: string[];
  getStartedURL: string;
  watchVideoURL?: string;
}
export interface PageHeaderProps {
  pageHeader?: Header;
}

export interface InfoItem {
  heading: string;
  text: string;
  img: string;
  blogLink?: string;
  buttonText?: string;
  TextimageLeft?: boolean;
  new?: boolean;
  buttonLink?: string;
  blogLinktext?: string;
}

interface TestimonialData {
  userImg: string;
  comment: string;
  userName: string;
  main?: boolean;
}

export interface PopularContentData {
  img: string;
  title: string;
  text: string;
  blogLink: string;
  category: string;
}

export interface PopularContentDataProps {
  PopularContentData: PopularContentData[];
}

export interface getStartedSection {
  title: string;
  text?: string;
  link: string;
  gradientTo?: string;
  gradientFrom?: string;
  title2?: string;
  bgImg?: string;
}
export interface SolutionPage {
  pageName: string;
  name: string;
  Header: Header;
  Info: InfoItem[];
  staticTestimonialsData: staticTestimonialCards;
  popularContentData: PopularContentData[];
  getStartedSection: getStartedSection;
}

export interface FeaturesPage {
  pageName: string;
  name: string;
  Header: Header;
  Overview: string;
  Info: InfoItem[];
}

export interface GetStarted3 {
  heading1: string;
  heading2?: string;
  getStartedLink: string;
  bgImg: string;
}
