import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./coverflow.css";

const cards = [
  { id: 1, image: "/food/meal.jpg" },
  { id: 2, image: "/food/meal1.webp" },
  { id: 3, image: "/food/meal.jpg" },
  { id: 4, image: "/food/meal1.webp" },
  { id: 5, image: "/food/meal.jpg" },
];

export default function CardCoverflow() {
  return (
    <div className="py-10">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        navigation
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Navigation, EffectCoverflow]}
        className="cardSwiper"
      >
        {cards.map((item) => (
          <SwiperSlide key={item.id} className="cardSlide">
            <img src={item.image} className="cardImage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
