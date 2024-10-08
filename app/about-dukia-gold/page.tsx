"use client";

import AboutHero from '@/components/aboutUsSections/AboutHero'
import MeetOurTeam from '@/components/aboutUsSections/MeetOurTeam';
import WeAreDukia from '@/components/aboutUsSections/WeAreDukia';
import Newsletter from '@/components/landingPageComponents/landingPageSections/Newsletter'
import { useRef } from 'react';

const AboutUsPage = () => {
  const nextSectionRef = useRef<HTMLElement>(null);

  const handleScrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
        <AboutHero handleScrollToNextSection={handleScrollToNextSection} />

        <WeAreDukia nextSectionRef={nextSectionRef} />

        <MeetOurTeam />

        <Newsletter />
    </main>
  )
}

export default AboutUsPage