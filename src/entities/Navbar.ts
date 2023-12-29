// Solution.ts
export interface Solution {
  name: string;
  href: string;
  description: string;
  icon?: string;
  new?: boolean;
}

// Features.ts
export interface Features {
  name: string;
  href: string;
  icon: string;
}

// ResourcesNewSellers.ts
export interface ResourcesNewSellers {
  name: string;
  href: string;
  description: string;
  updated?: boolean;
}

// ResourcesTools.ts
export interface ResourcesTools {
  name: string;
  href: string;
}

// ResourcesLearn.ts
export interface ResourcesLearn {
  name: string;
  href: string;
  description?: string;
  updated?: boolean;
}
