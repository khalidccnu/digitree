import { cn } from '@lib/utils';
import React from 'react';

interface IProps {
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  subtitle?: React.ReactNode;
  title: React.ReactNode;
}
const SectionIntro = ({ className, subtitleClassName, titleClassName, subtitle, title }: IProps) => {
  return (
    <div className={cn('section_intro', className)}>
      <div className="intro_wrapper">
        {subtitle && <p className={cn('intro_subtitle', subtitleClassName)}>{subtitle}</p>}
        <h2 className={cn('intro_title', titleClassName)}>{title}</h2>
      </div>
    </div>
  );
};

export default SectionIntro;
