"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";

const autoPlayConfig = {
  delay: 5700,
  disableOnInteraction: false,
};

interface HeroCarouselProps {}

const HeroCarousel: FC<HeroCarouselProps> = ({}) => {
  return (
    <section className="bg-blue-500">
      <Swiper
        id="slider"
        autoplay={autoPlayConfig}
        slidesPerView={1}
        centeredSlides={true}
        speed={300}
        loop={true}
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
        <SwiperSlide>
          <div className="grid grid-cols-2 items-center">
            <div className="flex flex-col gap-8 px-4">
              <h3 className="font-bold text-3xl text-white">
                Anda Fokus Bisnis Aja, Kami Yang Buatin Iklannya
              </h3>
              <p className="text-lg text-white">
                Gunakan kode kupon NEWADV. Periode promo 1-15 Februari 2024
              </p>
              <Button className=" bg-orange-300 w-40 rounded-xl">
                Pasang Sekarang
              </Button>
            </div>
            <Image
              src={"/banner1.png"}
              width={820}
              height={812}
              className="w-full h-[32em]"
              alt="banner1"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
