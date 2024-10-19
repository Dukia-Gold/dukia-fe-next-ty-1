"use client";

import AboutHero from '@/components/aboutUsSections/AboutHero'
import MeetOurTeam from '@/components/aboutUsSections/MeetOurTeam';
import WeAreDukia from '@/components/aboutUsSections/WeAreDukia';
import Newsletter from '@/components/landingPageComponents/landingPageSections/Newsletter'

const AboutUsPage = () => {

  return (
    <main>
        <AboutHero />

        <WeAreDukia />

        <MeetOurTeam />

        <Newsletter />
    </main>
  )
}

export default AboutUsPage