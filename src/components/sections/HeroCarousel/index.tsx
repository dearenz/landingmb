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

const Header = [
  [
    "Dapatkan harga terbaik untuk eksposur terluas di kota-kota besar mulai dari Rp11.000an aja",
    "1.OOH_.jpg",
  ],
  [
    "Tingkatkan komunikasi bisnismu dengan layanan terpercaya kami",
    "2.SMS.jpg",
  ],
  ["Gandeng influencer buat promosiin produkmu!", "3.DIGITAL MARKETING_.jpg"],
  [
    "Layanan digital marketing super affordable! Harga terjangkau",
    "4.INFLUENCER.jpg",
  ],
];

interface HeroCarouselProps {}

const HeroCarousel: FC<HeroCarouselProps> = ({}) => {
  return (
    <section className="bg-darkred">
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
        {Header.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 items-center">
              <div className="flex flex-col gap-8 px-4">
                <h3 className="font-bold text-3xl text-white">{data[0]}</h3>
                <p className="text-lg text-white hidden">{data[0]}</p>
                <Button className=" bg-orange-300 w-40 rounded-xl">
                  Pasang Sekarang
                </Button>
              </div>
              <Image
                src={`/Header/${data[1]}`}
                width={820}
                height={812}
                className="w-full h-[32em]"
                alt="banner1"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
