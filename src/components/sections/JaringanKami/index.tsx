"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface JaringanKamiProps {}

const autoPlayConfig = {
  delay: 5700,
  disableOnInteraction: false,
};

const JaringanKami: FC<JaringanKamiProps> = ({}) => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-7">
          <div className="flex flex-col items-center gap-3">
            {/* Title Section */}
            <h3 className="font-bold text-primary text-2xl">Jaringan Kami</h3>
            <p className="text-base text-secondary">
              Iklan Anda akan tampil di grup media digital terbesar di Indonesia
            </p>
          </div>

          {/* Carousel Items */}
          <Swiper
            className="w-full"
            id="slider"
            autoplay={autoPlayConfig}
            centeredSlides={true}
            speed={300}
            slidesPerView={4}
            pagination={{
              type: "progressbar",
              el: "#slider .swiper-pagination",
              clickable: true,
            }}
            navigation={{
              nextEl: "#slider .swiper-button-next",
              prevEl: "#slider .swiper-button-prev",
            }}
            modules={[Pagination, Navigation, Autoplay]}>
            {[1, 2, 3, 4, 5].map((data, index) => (
              <SwiperSlide className="!w-1/4 " key={index}>
                <img className="px-4" src="/logoo.png" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default JaringanKami;
