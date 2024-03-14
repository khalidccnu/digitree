import { IHeroBanner } from '@apis/hero_banner/interfaces';
import MediaIcon from '@lib/assets/icons/MediaIcon';
import { cn } from '@lib/utils';
import { Button } from 'antd';
import React from 'react';
import SectionIntro from './SectionIntro';

interface IProps {
  className?: string;
  heroBanner: IHeroBanner;
}

const HeroBannerSection: React.FC<IProps> = ({ className, heroBanner }) => {
  return (
    <section className={cn(className, 'hero_banner_section')} id="home">
      <div className="container">
        <div className="hero_banner_wrapper">
          <div className="image_container">
            <img
              src={heroBanner?.attributes?.image?.data?.attributes?.url}
              alt={heroBanner?.attributes?.image?.data?.attributes?.alternativeText || 'hero banner'}
            />
          </div>
          <div className="content_wrapper">
            <SectionIntro subtitle="Business" title={heroBanner?.attributes?.title} />
            <p className="description">{heroBanner?.attributes?.description}</p>
            <div className="btn_group">
              <Button type="primary">Explore More</Button>
              <Button icon={<MediaIcon />}>Show Videos</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerSection;
