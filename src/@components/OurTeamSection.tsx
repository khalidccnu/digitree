import { ITeamMocData } from '@apis/our_team/interfaces';
import { teamMocData } from '@apis/our_team/teamMocData';
import { cn } from '@lib/utils';
import React from 'react';
import OurTeamMemberCard from './OurTeamMemberCard';
import SectionIntro from './SectionIntro';

interface IProps {
  className?: string;
}

const OurTeamSection: React.FC<IProps> = ({ className }) => {
  return (
    <section className={cn(className, 'our_team_section')}>
      <div className="container">
        <div className="our_team_wrapper">
          <SectionIntro subtitle="Our team" title="Team Members" />
          <div className="card_wrapper">
            {teamMocData?.map((member: ITeamMocData, idx) => {
              const groupNumber = Math.floor(idx / 4);

              return groupNumber % 2 === 0 ? (
                <div key={member?.id} className="team_group team_group_even">
                  <OurTeamMemberCard member={member} />
                </div>
              ) : (
                <div key={member?.id} className="team_group team_group_odd">
                  <OurTeamMemberCard member={member} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
