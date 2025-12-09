export type Experience = {
  logo: {
    src: string | { light: string; dark: string };
    alt: string;
    spacing: string;
  };
  timeline: string;
  location: string;
  heading: string;
  subHeading: string;
  listItems: string[];
  badges?: string[];
};

export type Skill = {
  icon: {
    code: string;
    color?: string;
    bgColor: string;
  };
  name: string;
  description: string;
  badgeEmphasis?: string;
  filters?: string[];
};

export type Project = {
  mockup: {
    src: {
      light: string;
      dark: string;
    };
    alt: string;
  };
  liveUrl: string;
  githubUrl?: string;
  name: string;
  description: string;
  badges: string[];
  badgeEmphasis?: string;
  filters: string[];
  yearCreated: number;
};
