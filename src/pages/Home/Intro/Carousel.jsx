import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.scss";
import arrow_right from "../../../assets/icons/arrow_right.svg";
import {
  Navigation,
  Autoplay,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        cssMode={true}
        navigation={false}
        // pagination={{
        //   clickable: true,
        // }}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper mt-10"
      >
        <SwiperSlide className="slide_img">
          <div className="pl-20 pt-[43px]">
            <h2 className="font-[MediumR] text-[28px]">40% OFF</h2>
            <p className="font-[Medium] text-[18px] mb-[19px]">
              Best deals this week. Fresh flowers, plants and gifts
            </p>
            <button className="px-[18px] py-[13px] bg-black text-white flex items-center gap-3 rounded">
              <p className="text-[14px]">Shop now</p>
              <img src={arrow_right} alt="arrow_right" />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_img">
          <div className="pl-20 pt-[43px]">
            <h2 className="font-[MediumR] text-[28px]">40% OFF</h2>
            <p className="font-[Medium] text-[18px] mb-[19px]">
              Best deals this week. Fresh flowers, plants and gifts
            </p>
            <button className="px-[18px] py-[13px] bg-black text-white flex items-center gap-3 rounded">
              <p className="text-[14px]">Shop now</p>
              <img src={arrow_right} alt="arrow_right" />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_img">
          <div className="pl-20 pt-[43px]">
            <h2 className="font-[MediumR] text-[28px]">40% OFF</h2>
            <p className="font-[Medium] text-[18px] mb-[19px]">
              Best deals this week. Fresh flowers, plants and gifts
            </p>
            <button className="px-[18px] py-[13px] bg-black text-white flex items-center gap-3 rounded">
              <p className="text-[14px]">Shop now</p>
              <img src={arrow_right} alt="arrow_right" />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide_img">
          <div className="pl-20 pt-[43px]">
            <h2 className="font-[MediumR] text-[28px]">40% OFF</h2>
            <p className="font-[Medium] text-[18px] mb-[19px]">
              Best deals this week. Fresh flowers, plants and gifts
            </p>
            <button className="px-[18px] py-[13px] bg-black text-white flex items-center gap-3 rounded">
              <p className="text-[14px]">Shop now</p>
              <img src={arrow_right} alt="arrow_right" />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
