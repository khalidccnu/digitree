import { imagePaths } from '@lib/constant';
import { cn } from '@lib/utils';
import React from 'react';

interface IProps {
  className?: string;
}

const VideoCard: React.FC<IProps> = ({ className }) => {
  return (
    <div className={cn(className, 'video_card')}>
      <div className="image_container">
        <img src={imagePaths?.placeHolder} alt="" />
      </div>
    </div>
  );
};

export default VideoCard;
