import { Copyright, FAQ, Footer, Review } from "@/typings/landingPage/home";

export const customerReviews: Review[] = [
  {
    key: 1,
    name: "Abdullah Yusuf",
    review:
      "I was new to gold trading and did not know where to start. Thankfully, I found the Dukia Gold website and it made the whole process easy and stress-free. They have a wide variety of products at fair prices. The educational resources on the website helped me understand more about investing in gold",
  },
  {
    key: 2,
    name: "Bolaji Anifowoshe",
    review:
      "I was impressed with the level of security and privacy measures the trading platform had. I felt comfortable trading with them with a solid assurance that my transactions were safe and secure.",
  },
  {
    key: 3,
    name: "Abdullateef Olushola",
    review:
      "Their customer service team is top-notch and always available to answer any questions I have on gold investment. Now, I feel like a pro!",
  },
  {
    key: 4,
    name: "Wale Soneye",
    review:
      "I had a delightful experience using the Dukia Gold Trading Platform to make my first gold purchase. It was user-friendly and easy to navigate. I highly recommend this platform to anyone interested in investing in gold.",
  }, 
];

export const faqs: FAQ[] = [
  {
    id: 1,
    title: "Who is Dukia Gold? ",
    content:
      "Dukia Gold & Precious Metals Refining Co. Ltd (Dukia Gold) is a full-service bullion merchant involved in the trading (buying and selling), vaulting and custodial services of gold and other precious metals in addition to our other gold value chain activities from mines to market.",
  },
  {
    id: 2,
    title: "How do I buy gold from you?",
    content:
      "Once your Dukia Gold Trading Account has been set up, you can then start buying from our selection of investment grade gold products.",
  },
  {
    id: 3,
    title: "What are your delivery methods?",
    content:
      "Our packages are discretely wrapped and delivered through our partner couriers with an option for insurance. You can also advise your preferred courier service provider and arrange for your insurance. When you receive goods from us by courier, we advise you ensure the external packaging has not been tampered with. If you notice any sign of tampering or damages, you should not sign for it.",
  },
  {
    id: 4,
    title: "Can you store your gold with us?",
    content:
      "Yes, you can opt for storage of your gold at our designated LBMA accredited state-of-the-art, high security, and fully insured storage facility in Switzerland and UK. ",
  },
];

export const footer: Footer = {
  logo: "https://res.cloudinary.com/dvcw253zw/image/upload/v1721822926/dukia-new-logo_gg5cde.png",
  corporation: "Dukia Gold & Precious Metals Refining Co. Ltd.",
  subtext: "Your Precious Metals Refiner & Trusted Bullion Merchant",
  address: "3B, Olusola Olude Close, Gbagada Phase 2, Lagos, Nigeria",
  email: "sales@dukiapreciousmetals.co",
  phone: ["+234 703 323 8121", "+234 903 150 6699"],
  store: {
    name: "Brinks",
    logo: "https://res.cloudinary.com/dvcw253zw/image/upload/v1721826164/brinks-logo-blue_1_bgbw94.png",
  },
  sections: [
    {
      title: "COMPANY",
      links: [
        { label: "About Us", href: "about-us/dukia-gold" },
        { label: "Cookies & Privacy Policy", href: "/cookies-privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-conditions" },
      ],
    },
    {
      title: "PRODUCTS",
      links: [
        { label: "Buy Gold Bars", href: "/buy-gold/bars" },
        { label: "Buy Gold Coins", href: "/buy-gold/coins" },
        { label: "Buy Pool Allocated", href: "/buy-gold/pool-allocated" },
        { label: "Dukia Gold Card", href: "/buy-gold/card" },
        { label: "Sell To Us", href: "/" },
      ],
    },
    {
      title: "GUIDES",
      links: [
        {
          label: "Pool Allocated Calculator",
          href: "/guides/pool-allocated-calculator",
        },
        { label: "Shop With Ease", href: "/guides/shop-with-ease" },
        { label: "What We Offer", href: "/guides/what-we-offer" },
        { label: "Why Choose Us", href: "/guides/why-choose-us" },
        { label: "As Featured In", href: "/guides/as-featured-in" },
        { label: "FAQs", href: "/#FAQ" },
      ],
    },
  ],
};

export const copyright: Copyright = {
  year: 2024,
  corporation: "Dukia Gold - Precious Metals Refining Co. Ltd.",
  socials: [
    {
      icon: "Linkedin",
      href: "https://www.linkedin.com/company/dukiagoldapp/",
    },
    {
      icon: "RiTwitterXFill",
      href: "https://x.com/DukiaGoldApp",
    },
    {
      icon: "RiInstagramFill",
      href: "https://www.instagram.com/dukiagoldapp/",
    },
    {
      icon: "RiFacebookFill",
      href: "https://www.facebook.com/dukiagoldapp",
    },
    {
      icon: "RiYoutubeFill",
      href: "https://www.youtube.com/@DukiaGoldApp",
    },
  ],
};
