import { cn } from '@lib/utils';
import React from 'react';
import SectionIntro from './SectionIntro';

interface IProps {
  className?: string;
}

const AboutUsSection: React.FC<IProps> = ({ className }) => {
  return (
    <section className={cn(className, 'about_us_section')} id="about">
      <div className="container">
        <div className="about_us_wrapper">
          <div className="content_wrapper">
            <SectionIntro
              subtitle="About Us"
              title={
                <>
                  We are a dynamic team of <span>creative</span> people of innovation & marketing
                </>
              }
            />
            <p className="description">
              As a process transformation company, we rethinks and rebuilds processes for the digital age by combining
              the speed and insight of design thinking with the scale and accuracy of data analytics. We rethink the
              process and work together to streamline it, rebuild it, and deliver it.
            </p>
            <div className="card_wrapper">
              <div className="card">
                <h5 className="card_title">Boost Your Business</h5>
                <p className="card_description description">
                  When it comes to sustainability and corporate responsibility, we believe the normal rules of business.
                </p>
              </div>
              <div className="card">
                <h5 className="card_title">Filtering Business Data</h5>
                <p className="card_description description">
                  The industry has recognized us for our constant endeavour to provide end-to-end customized solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="image_container">
            <img src="/images/about_us/about_us_thumb.svg" alt="hero banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
