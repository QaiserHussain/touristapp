import { Typography, styled, Card, CardContent, colors } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import PackageCard from './PackageCard';

function Packages() {
    const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <Typography component={'div'}>
            <Typography component={'div'} variant='h4'>Packages</Typography>
            <Typography component={'div'} sx={{ width: '100%' }}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={25}
                    breakpoints={{
                        100: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper swiper"
                    style={{ width: '100%' }}
                >
                    {slides.map(i => (
                        <SwiperSlide style={{ textAlign: 'start' }} key={i}>
                            <PackageCard />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Typography>
        </Typography>
    )
}

export default Packages;