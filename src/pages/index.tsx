import AboutUsSection from '@components/AboutUsSection';
import HeroBannerSection from '@components/HeroBannerSection';
import LatestWorkSection from '@components/LatestWorkSection';
import OurTeamSection from '@components/OurTeamSection';
import RecentBlogSection from '@components/RecentBlogSection';
import TestimonialSection from '@components/TestimonialSection';
import WhatWeDoSection from '@components/WhatWeDoSection';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <HeroBannerSection className="py-10 lg:py-20" />
      <AboutUsSection className="py-10 lg:py-20" />
      <WhatWeDoSection className="py-10 lg:py-20" />
      <OurTeamSection className="py-10 lg:py-20" />
      <LatestWorkSection className="py-10 lg:py-20" />
      <RecentBlogSection className="py-10 lg:py-20" />
      <TestimonialSection className="py-10 lg:py-20" />
    </React.Fragment>
  );
}
