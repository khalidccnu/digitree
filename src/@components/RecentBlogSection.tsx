import { cn } from '@lib/utils';
import React from 'react';
import BlogCard from './BlogCard';
import SectionIntro from './SectionIntro';

interface IProps {
  className?: string;
}

const RecentBlogSection: React.FC<IProps> = ({ className }) => {
  return (
    <section className={cn(className, 'recent_blog_section')} id="blogs">
      <div className="container">
        <SectionIntro subtitle="latest news" title="Recent blog post" />
        <div className="recent_blog_wrapper">
          <BlogCard className="thumb" />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default RecentBlogSection;
