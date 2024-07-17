"use client";

import { useFetchGoldPriceDollars } from '@/api/fetchGoldPrice';
import AboutHero from '@/components/aboutUsSections/AboutHero'
import WeAreDukia from '@/components/aboutUsSections/WeAreDukia';
import Newsletter from '@/components/landingPageComponents/landingPageSections/Newsletter'
import { useRef } from 'react';

const AboutUsPage = () => {
  const nextSectionRef = useRef<HTMLElement>(null);
  const fetchGoldPriceDollars = useFetchGoldPriceDollars();

  const handleScrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
        <AboutHero handleScrollToNextSection={handleScrollToNextSection} />

        <WeAreDukia nextSectionRef={nextSectionRef} />

        <Newsletter />
    </main>
  )
}

export default AboutUsPage