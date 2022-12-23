import { Typography, styled, Card, CardContent } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { MdStar } from 'react-icons/md'
import Image from 'next/image';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';

function Packages() {


  return (
    <Typography component={'div'} sx={{ padding: { xs: '10px', sm: '20px', md: '50px 80px', }, color: '#6D6D6D' }}>
      <Typography component={'div'} variant='h4' sx={{ textAlign: 'center', marginBottom: '20px' }}>Packages</Typography>
      <Typography component={'div'} sx={{ width: '100%' }}>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
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
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper swiper"
          style={{ width: '100%' }}
        >
          <SwiperSlide style={{ textAlign: 'start' }}>
            <Card sx={{ width: '100%', border: 'none', boxShadow: 'none' }}>
              <Typography component={'div'} sx={{ height: { xs: '250px', sm: '300px', md: '300px', lg: '300px' } }}>
                <Image src={two} alt="two" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
              </Typography>
              <CardContent sx={{ padding: '0', paddingTop: '10px' }}>
                <Typography component={"div"} gutterBottom variant="h5" sx={{ display: 'flex', justifyContent: 'space-between' }} >
                  <span>Pakistan, Sindh</span>
                  <span><MdStar /> 5.0</span>
                </Typography>
                <Typography component={"div"} variant="body1" color="text.secondary" gutterBottom>
                  560,2 kilometer away <br /> Feb 26 - Mar 3
                </Typography>
                <Typography component={"div"} variant="h6"  >
                  $113 night
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide style={{ textAlign: 'start' }}>
            <Card sx={{ width: '100%', border: 'none', boxShadow: 'none' }}>
            <Typography component={'div'} sx={{ height: { xs: '250px', sm: '300px', md: '300px', lg: '300px' } }}>
                <Image src={two} alt="two" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
              </Typography>
              <CardContent sx={{ padding: '0', paddingTop: '10px' }}>
                <Typography component={"div"} gutterBottom variant="h5" sx={{ display: 'flex', justifyContent: 'space-between' }} >
                  <span>Pakistan, Sindh</span>
                  <span><MdStar /> 5.0</span>
                </Typography>
                <Typography component={"div"} variant="body1" color="text.secondary" gutterBottom>
                  560,2 kilometer away <br /> Feb 26 - Mar 3
                </Typography>
                <Typography component={"div"} variant="h6"  >
                  $113 night
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide style={{ textAlign: 'start' }}>
            <Card sx={{ width: '100%', border: 'none', boxShadow: 'none' }}>
            <Typography component={'div'} sx={{ height: { xs: '250px', sm: '300px', md: '300px', lg: '300px' } }}>
                <Image src={two} alt="two" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
              </Typography>
              <CardContent sx={{ padding: '0', paddingTop: '10px' }}>
                <Typography component={"div"} gutterBottom variant="h5" sx={{ display: 'flex', justifyContent: 'space-between' }} >
                  <span>Pakistan, Sindh</span>
                  <span><MdStar /> 5.0</span>
                </Typography>
                <Typography component={"div"} variant="body1" color="text.secondary" gutterBottom>
                  560,2 kilometer away <br /> Feb 26 - Mar 3
                </Typography>
                <Typography component={"div"} variant="h6"  >
                  $113 night
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide style={{ textAlign: 'start' }}>
            <Card sx={{ width: '100%', border: 'none', boxShadow: 'none' }}>
            <Typography component={'div'} sx={{ height: { xs: '250px', sm: '300px', md: '300px', lg: '300px' } }}>
                <Image src={two} alt="two" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
              </Typography>
              <CardContent sx={{ padding: '0', paddingTop: '10px' }}>
                <Typography component={"div"} gutterBottom variant="h5" sx={{ display: 'flex', justifyContent: 'space-between' }} >
                  <div>Pakistan, Sindh</div>
                  <div><MdStar /> 5.0</div>
                </Typography>
                <Typography component={"div"} variant="body1" color="text.secondary" gutterBottom>
                  560,2 kilometer away <br /> Feb 26 - Mar 3
                </Typography>
                <Typography component={"div"} variant="h6"  >
                  $113 night
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Typography>
    </Typography>
  )
}

// const Card = styled(Typography)(({theme})=>({
//    width:'300px',
//    height:'300px',
//    border:'1px solid lightgrey',
//    borderRadius:'10px'
// }))
// const PrimaryText = styled(Typography)(({ theme }) => ({
//   padding:'5px',
//   color:'grey',
//   fontSize:'18px'
// }))
// const SecondaryText = styled(Typography)(({ theme }) => ({
//   color:'#6D6D6D',
//   fontSize:'16px'
// }))


export default Packages;