import { ITestimonialMocData } from '@apis/testimonial/interfaces';
import { testimonialMocData } from '@apis/testimonial/testimonialMocData';
import { cn } from '@lib/utils';
import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Controller, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInstance } from 'swiper/types';
import SectionIntro from './SectionIntro';

interface IProps {
  className?: string;
}

const TestimonialSection: React.FC<IProps> = ({ className }) => {
  const [imageSwiper, setImageSwiper] = useState<SwiperInstance | null>(null);
  const [contentSwiper, setContentSwiper] = useState<SwiperInstance | null>(null);

  return (
    <section className={cn(className, 'testimonial_section')} id="testimonial">
      <div className="container">
        <SectionIntro
          subtitle="Testimonial"
          title={
            <>
              What our <span>client</span> say
            </>
          }
        />
        <div className="testimonial_wrapper">
          <div className="image_swiper">
            <Swiper
              grabCursor
              spaceBetween={25}
              onSwiper={setImageSwiper}
              controller={{ control: contentSwiper }}
              modules={[Controller]}
            >
              {testimonialMocData?.map((testimonial: ITestimonialMocData) => (
                <SwiperSlide key={testimonial?.id}>
                  <div className="image_container">
                    <img src={testimonial?.image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="content_wrapper">
            <div className="slider_controller">
              <div className="prev_btn">
                <FiArrowLeft size={24} />
              </div>
              <div className="pagination"></div>
              <div className="next_btn">
                <FiArrowRight size={24} />
              </div>
            </div>
            <div className="content_swiper">
              <Swiper
                spaceBetween={25}
                onSwiper={setContentSwiper}
                controller={{ control: imageSwiper }}
                modules={[Navigation, Controller, Pagination]}
                navigation={{
                  enabled: true,
                  prevEl: '.prev_btn',
                  nextEl: '.next_btn',
                  disabledClass: 'disabled_btn',
                }}
                pagination={{ el: '.pagination', clickable: true }}
              >
                {testimonialMocData?.map((testimonial: ITestimonialMocData) => (
                  <SwiperSlide key={testimonial?.id}>
                    <div className="card">
                      <p className="card_description">{testimonial?.content}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
