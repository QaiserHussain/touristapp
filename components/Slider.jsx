import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import Image from 'next/image';
import { Typography } from "@mui/material";

function Slider() {

  return (
    <Typography sx={{height:{xs:'300px',sm:'300px',md:'500px'}, width: '100%'}} component={'div'}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper swiper"
        style={{ height: '100%', width: '100%' }}
      >
        <SwiperSlide className="swiper-slide">
          <Image src={one} alt="one" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image src={two} alt="two" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={three} alt="three" />
        </SwiperSlide>

      </Swiper>
    </Typography>
  )
}

export default Slider;