"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";

export default function Benefits() {
  return (
    <div className="bg-white h-screen-minus-112 flex flex-col gap-10 justify-center items-center px-28 z-20">
      <div>
        <h3 className="mb-12 text-6xl font-extrabold max-w-2xl text-center">
          Ventajas de trabajar junto con nosotros
        </h3>
      </div>
      <div className="flex flex-col gap-12 items-center h-3/5 w-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            scale: 0.8,
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="border border-main rounded-md p-4">
            <p className="max-w-44">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum quasi error tempora totam eum sunt recusandae, rerum
              temporibus perspiciatis id cum vel, doloremque similique molestiae
              porro eaque accusamus facere facilis.
            </p>
          </SwiperSlide>
          <SwiperSlide className="border border-main rounded-md p-4">
            <p className="max-w-44">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum quasi error tempora totam eum sunt recusandae, rerum
              temporibus perspiciatis id cum vel, doloremque similique molestiae
              porro eaque accusamus facere facilis.
            </p>
          </SwiperSlide>
          <SwiperSlide className="border border-main rounded-md p-4">
            <p className="max-w-44">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum quasi error tempora totam eum sunt recusandae, rerum
              temporibus perspiciatis id cum vel, doloremque similique molestiae
              porro eaque accusamus facere facilis.
            </p>
          </SwiperSlide>
        </Swiper>
        <div className="w-full flex justify-center items-center gap-5 flex-col">
          <p className="max-w-72 text-center">
            Descubre porque somos la mejor opción para tu empresa!
          </p>
          <Link
            href="/servicios"
            className="bg-main text-white hover:bg-lighterMain rounded-full w-fit p-4"
          >
            Nuestros servicios
          </Link>
        </div>
      </div>
    </div>
  );
}
