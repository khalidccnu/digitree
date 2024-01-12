import AboutUsSection from '@components/AboutUsSection';
import HeroBannerSection from '@components/HeroBannerSection';
import WhatWeDoSection from '@components/WhatWeDoSection';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <HeroBannerSection className="py-10 lg:py-20" />
      <AboutUsSection className="py-10 lg:py-20" />
      <WhatWeDoSection className="py-10 lg:py-20" />
    </React.Fragment>
  );
}
