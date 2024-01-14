import { ILatestWorkMocData } from '@apis/latest_work/interfaces';
import { latestWorkMocData } from '@apis/latest_work/latestWorkMocData';
import { cn } from '@lib/utils';
import React, { useState } from 'react';
import SectionIntro from './SectionIntro';

interface IProps {
  className?: string;
}

const LatestWorkSection: React.FC<IProps> = ({ className }) => {
  const [arrInterval] = useState(3);

  const columnArr = Array.from({ length: arrInterval }, (_, idx) => {
    return latestWorkMocData.filter((_, i) => i % arrInterval === idx);
  });

  return (
    <section className={cn(className, 'latest_work_section')}>
      <div className="container">
        <SectionIntro subtitle="Recent work" title="Our latest case studies" />
        <div className="latest_work_wrapper">
          <div className="latest_work_column">
            {columnArr[0]?.map((img: ILatestWorkMocData) => (
              <div key={img?.id} className="image_container">
                <img src={img?.url} alt="" />
              </div>
            ))}
          </div>
          <div className="latest_work_column">
            {columnArr[1]?.map((img: ILatestWorkMocData) => (
              <div key={img?.id} className="image_container">
                <img src={img?.url} alt="" />
              </div>
            ))}
          </div>
          <div className="latest_work_column">
            {columnArr[2]?.map((img: ILatestWorkMocData) => (
              <div key={img?.id} className="image_container">
                <img src={img?.url} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWorkSection;
