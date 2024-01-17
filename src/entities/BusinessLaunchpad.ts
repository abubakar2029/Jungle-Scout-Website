export interface CardContent {
  image: string;
  imageName: string;
  resources: { heading: string; content: string }[];
  icon: string;
  iconName: string;
  heading: string;
  featuresList: string[];
}

export interface Card {
    cardType: string;
    backgroundImage: string;
    backgroundImageMobile: string;
    title: string;
    text: string;
    CardContent: CardContent;
    startupMessage?: string;
    referencePerson?: string;
    referencePosition?: string;
    referenceBlogLink?: string;
  }