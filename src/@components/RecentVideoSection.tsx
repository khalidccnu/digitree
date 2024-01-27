import { cn } from '@lib/utils';
import React from 'react';
import SectionIntro from './SectionIntro';
import VideoCard from './VideoCard';

interface IProps {
  className?: string;
}

const RecentVideoSection: React.FC<IProps> = ({ className }) => {
  return (
    <section className={cn(className, 'recent_video_section')} id="videos">
      <div className="container">
        <SectionIntro title="Latest videos" />
        <div className="recent_video_wrapper">
          <VideoCard className="thumb" />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </section>
  );
};

export default RecentVideoSection;
