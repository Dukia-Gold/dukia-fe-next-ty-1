"use client";

import AboutHero from '@/components/aboutUsSections/AboutHero'
import WeAreDukia from '@/components/aboutUsSections/WeAreDukia';
import Newsletter from '@/components/landingPageComponents/landingPageSections/Newsletter'

const AboutUsPage = () => {
  return (
    <main>
        <AboutHero />

        <WeAreDukia />

        <Newsletter />
    </main>
  )
}

export default AboutUsPage