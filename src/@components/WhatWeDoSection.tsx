import { cn } from '@lib/utils';
import { Button } from 'antd';
import React from 'react';
import { TbBusinessplan } from 'react-icons/tb';
import SectionIntro from './SectionIntro';

interface IProps {
  className?: string;
}

const WhatWeDoSection: React.FC<IProps> = ({ className }) => {
  return (
    <section className={cn(className, 'what_we_do_section')} id="what_we_do">
      <div className="container">
        <SectionIntro subtitle="What we do" title="We provide wide range of business services" />
        <div className="what_we_do_wrapper">
          <div className="first_card_wrapper">
            <div className="card_wrapper">
              <div className="card">
                <div className="card_icon_container">
                  <TbBusinessplan size={56} />
                </div>
                <h5 className="card_title">Financial</h5>
                <p className="card_description description">
                  We help financial institutions, from banking and insurance to wealth
                </p>
              </div>
              <div className="card">
                <div className="card_icon_container">
                  <TbBusinessplan size={56} />
                </div>
                <h5 className="card_title">Financial</h5>
                <p className="card_description description">
                  We help financial institutions, from banking and insurance to wealth
                </p>
              </div>
            </div>
          </div>
          <div className="image_container">
            <img src="/images/what_we_do/what_we_do_thumb.svg" alt="hero banner" />
          </div>
          <div className="second_card_wrapper">
            <div className="card_wrapper">
              <div className="card">
                <div className="card_icon_container">
                  <TbBusinessplan size={56} />
                </div>
                <h5 className="card_title">Financial</h5>
                <p className="card_description">We help financial institutions, from banking and insurance to wealth</p>
              </div>
              <div className="card">
                <div className="card_icon_container">
                  <TbBusinessplan size={56} />
                </div>
                <h5 className="card_title">Financial</h5>
                <p className="card_description">We help financial institutions, from banking and insurance to wealth</p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_container">
          <Button>View All Services</Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
