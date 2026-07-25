import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Carousel({ data, renderComponent }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      slidesPerView={7}
      spaceBetween={20}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          {renderComponent(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;