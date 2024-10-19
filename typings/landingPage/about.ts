export interface AboutHero {
  title: string;
  subtitle: string;
  content: string;
}

export interface AboutContent {
  title: string;
  pg1: string;
  pg2: string;
  pg3: string;
  pg4: string;
  reverseLayout: boolean;
  ref: string;
  inView: string;
}

export interface VisionAndMission {
  title: string;
  content: string;
  image: string;
  reverseLayout: boolean;
  ref: string;
  inView: string;
}

export interface TeamMember {
  pic: string;
  name: string;
  position: string;
  linkedin: string;
}
