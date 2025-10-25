import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

const SwiperSlider = () => {
  const swiperRef = React.useRef();

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const images = [
    "https://tse3.mm.bing.net/th/id/OIP.9iF6vP-defygpqJc7-J1kwHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://ts2.mm.bing.net/th?id=OIP.3PrP5eVXIFM6xZgi_w1NdgHaEc&pid=15.1",
    "https://ts1.mm.bing.net/th?id=OIP.9iF6vP-defygpqJc7-J1kwHaEc&pid=15.1",
    "https://ts1.mm.bing.net/th?id=OIP.-wl8tKouF-dh5hkjOTHUjQHaD9&pid=15.1",
    "https://ts2.mm.bing.net/th?id=OIP.5VRAeWBMNQLmiaJT7uD2pAHaEK&pid=15.1",
    "https://ts4.mm.bing.net/th?id=OIP.Rn9egzRxKyRGTODnRIWJMQHaEK&pid=15.1",
  ];

  return (
    <div className="swiper-container relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Toytopia Slide ${index + 1}`}
              className="w-full h-[200px] sm:h-[380px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute w-full top-4/10 z-1 flex justify-between gap-4 mt-4 px-4 sm:px-8">
        <button
          onClick={handlePrev}
          className="px-4 py-2 text-blue-300 text-4xl rounded"
        >
          <FaAnglesLeft />
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-blue-300 text-4xl rounded"
        >
          <FaAnglesRight />
        </button>
      </div>
    </div>
  );
};

export default SwiperSlider;
