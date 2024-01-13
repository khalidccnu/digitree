import { ILatestWorkMocData } from '@apis/latest_work/interfaces';
import { latestWorkMocData } from '@apis/latest_work/latestWorkMocData';
import { cn } from '@lib/utils';
import React from 'react';
import SectionIntro from './SectionIntro';

interface IProps {
  className?: string;
}

const LatestWorkSection: React.FC<IProps> = ({ className }) => {
  return (
    <section className={cn(className, 'latest_work_section')}>
      <div className="container">
        <SectionIntro subtitle="Recent work" title="Our latest case studies" />
        <div className="latest_work_wrapper">
          {latestWorkMocData?.map((img: ILatestWorkMocData) => (
            <div key={img?.id} className="image_container">
              <img src={img?.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWorkSection;
