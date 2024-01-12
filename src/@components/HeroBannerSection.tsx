import MediaIcon from '@lib/assets/icons/MediaIcon';
import { cn } from '@lib/utils';
import { Button } from 'antd';
import React from 'react';
import SectionIntro from './SectionIntro';

interface IProps {
  className?: string;
}

const HeroBannerSection: React.FC<IProps> = ({ className }) => {
  return (
    <section className={cn(className, 'hero_banner_section')}>
      <div className="container">
        <div className="hero_banner_wrapper">
          <div className="image_container">
            <img src="/images/hero_banner/banner_thumb.svg" alt="hero banner" />
          </div>
          <div className="content_wrapper">
            <SectionIntro subtitle="Business" title="How To Start Your Business" />
            <p className="description">
              Creating bespoke SharePoint solutions for your business to manage content, collaboration and employee
              engagement to boost your company performance.
            </p>
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
