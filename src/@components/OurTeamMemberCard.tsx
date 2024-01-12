import { ITeamMocData } from '@apis/our_team/interfaces';
import React from 'react';

interface IProps {
  member: ITeamMocData;
}

const OurTeamMemberCard: React.FC<IProps> = ({ member }) => {
  return (
    <div className="our_team_member_card">
      <div className="image_container">
        <img src={member?.image} alt={member?.name} />
      </div>
      <div className="content_wrapper">
        <h5 className="name">{member?.name}</h5>
        <p className="designation">{member?.designation}</p>
      </div>
    </div>
  );
};

export default OurTeamMemberCard;
