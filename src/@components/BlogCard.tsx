import { imagePaths } from '@lib/constant';
import { cn } from '@lib/utils';
import { Button } from 'antd';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface IProps {
  className?: string;
}

const BlogCard: React.FC<IProps> = ({ className }) => {
  return (
    <div className={cn(className, 'blog_card')}>
      <div className="image_container">
        <img src={imagePaths?.placeHolder} alt="" />
      </div>
      <div className="content_wrapper">
        <p className="tags">
          <span>Lifestyle</span>
          <span>•</span>
          <span>Lifestyle</span>
        </p>
        <h6 className="title">The 7 Most Beautiful Boutique Hotels in Singapore Worth Traveling</h6>
        <Button type="primary" icon={<FaArrowRight />}>
          Read more
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
