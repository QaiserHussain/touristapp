import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import Image from 'next/image';
import { Typography } from "@mui/material";

function Slider({ images }) {

  return (
    <Typography sx={{ height: { xs: '200px', sm: '300px', md: '400px' }, width: '100%', marginBottom: '20px' }} component={'div'}>
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
        {images ? 
         images.map(image => (
          <SwiperSlide className="swiper-slide" key={image}>
            <Image src={image} width={100} height={100} alt="one" />
          </SwiperSlide>
        ))
        :
        <SwiperSlide className="swiper-slide">
            <Image src={one} width={100} height={100} alt="one" />
        </SwiperSlide>
        }
       

      </Swiper>
    </Typography>
  )
}

export default Slider;