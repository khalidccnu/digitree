import { IHeroBanner } from '@apis/hero_banner/interfaces';
import MediaIcon from '@lib/assets/icons/MediaIcon';
import { cn } from '@lib/utils';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import ReactPlayer from 'react-player';
import SectionIntro from './SectionIntro';

interface IProps {
  className?: string;
  heroBanner: IHeroBanner;
}

const HeroBannerSection: React.FC<IProps> = ({ className, heroBanner }) => {
  const [isModalOpen, setModalOpen] = useState(false);

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
              <Button icon={<MediaIcon />} onClick={() => setModalOpen(true)}>
                Show Video
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        centered
        destroyOnClose
        className="video_player"
        footer={null}
        open={isModalOpen}
        closeIcon={<IoCloseCircleOutline onClick={() => setModalOpen(false)} size={24} />}
        onCancel={() => setModalOpen(false)}
      >
        <ReactPlayer url={heroBanner?.attributes?.video} />
      </Modal>
    </section>
  );
};

export default HeroBannerSection;
