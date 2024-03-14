import { IHeroBanner } from '@apis/hero_banner/interfaces';
import { HeroBannerServices } from '@apis/hero_banner/services';
import AboutUsSection from '@components/AboutUsSection';
import HeroBannerSection from '@components/HeroBannerSection';
import LatestWorkSection from '@components/LatestWorkSection';
import Nav from '@components/Nav';
import OurTeamSection from '@components/OurTeamSection';
import RecentBlogSection from '@components/RecentBlogSection';
import RecentVideoSection from '@components/RecentVideoSection';
import TestimonialSection from '@components/TestimonialSection';
import WhatWeDoSection from '@components/WhatWeDoSection';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';

interface IProps {
  heroBanner: IHeroBanner;
}

const HomePage: NextPage<IProps> = ({ heroBanner }) => {
  return (
    <React.Fragment>
      <Nav className="py-8" />
      <HeroBannerSection className="py-10 lg:py-20" heroBanner={heroBanner} />
      <AboutUsSection className="py-10 lg:py-20" />
      <WhatWeDoSection className="py-10 lg:py-20" />
      <OurTeamSection className="py-10 lg:py-20" />
      <LatestWorkSection className="py-10 lg:py-20" />
      <RecentBlogSection className="py-10 lg:py-20" />
      <RecentVideoSection className="py-10 lg:py-20" />
      <TestimonialSection className="py-10 lg:py-20" />
    </React.Fragment>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const heroBannerPromise = HeroBannerServices.findById(1, { populate: '*' });

  const [heroBannerQuery] = await Promise.all([heroBannerPromise]);

  return {
    props: {
      heroBanner: heroBannerQuery?.data || {},
    },
    revalidate: 60,
  };
};
