import React from 'react';

interface IProps {
  className?: string;
}

const MediaIcon: React.FC<IProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12.0012 24C5.37614 23.9927 0.00727557 18.6244 0 12V11.76C0.131931 5.16545 5.56206 -0.0864308 12.158 0.00107786C18.754 0.0885865 24.0428 5.48268 23.9997 12.0784C23.9566 18.6742 18.5977 23.9987 12.0012 24ZM9.60096 6.60002V17.4L16.8017 12L9.60096 6.60002Z" />
    </svg>
  );
};

export default MediaIcon;
