// components/TestimonialSlider.jsx
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialSlider = ({ sectionTitle, sectionSubtitle, testimonials = [] }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="testimonial pt-50 pb-70">
      <div className="container">
        <div className="da-sec-titlte text-center mb-60">
          <span className="sub_title">{sectionSubtitle}</span>
          <h2 className="title text-black ">{sectionTitle}</h2>
        </div>

        <div className="da-testimonial-wrap pos-rel">
          <div className="swiper-container">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              loop
              speed={1800}
              parallax
              ref={swiperRef}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index} className="da-testimonial">
                  <div className="row align-items-center mt-none-30">
                    <div className="col-lg-6 mt-30">
                      <div className="da-tes-left">
                        <h2 className="xb-item--title">{item.title}</h2>
                        <p className="xb-item--content content--one">{item.description}</p>

                        <div className="xb-item--holder ul_li align-items-start">
                          {item.stats?.map((stat, idx) => (
                            <div className="xb-item--meta" key={idx}>
                              <h3 className="xb-item--number">{stat.value}</h3>
                              <span className="xb-item--text">{stat.label}</span>
                            </div>
                          ))}
                        </div>

                        {item.extraContent?.map((para, idx) => (
                          <p key={idx} className={`xb-item--content content--${idx + 2}`}>
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-6 mt-30">
                      <div className="da-tes-right">
                        <div className="xb-item--author">
                          <img src={item.image1} alt="author" />
                        </div>
                        <div className="xb-item--avatar">
                          <img src={item.image2} alt="avatar" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="da-swiper-btn swiper-button-prev" ref={prevRef}>
              <i className="fal fa-long-arrow-left"></i>
            </div>
            <div className="da-swiper-btn swiper-button-next" ref={nextRef}>
              <i className="fal fa-long-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
