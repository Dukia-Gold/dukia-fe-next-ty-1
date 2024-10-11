export interface Review {
  key: number;
  name: string;
  review: string;
}

export interface FAQ {
  id: number;
  title: string;
  content: string;
}

type Store = {
  name: string;
  logo: string;
};

export interface Footer {
  logo: string;
  corporation: string;
  subtext: string;
  address: string;
  email: string;
  phone: Array<string>;
  store: Store;
  sections: Array<{
    title: string;
    links: Array<{ label: string; href: string }>;
  }>;
}

export interface Copyright {
  year: number;
  corporation: string;
  socials: Array<{ icon: string; href: string }>;
}
