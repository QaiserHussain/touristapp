import { Typography, styled, Card, CardContent,colors } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { MdStar } from 'react-icons/md'
import Image from 'next/image';
import two from '../assets/two.jpg';

function Packages() {
const slides= [1,2,3,4,5,6,7,8,9];

  return (
    <Typography component={'div'} sx={{ margin: { xs: '120px 10px 50px 10px', sm: '120px 10px 50px 10px', md: '120px 50px 50px 20px'}}}>
      <Typography component={'div'} variant='h4' >Packages</Typography>
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
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper swiper"
          style={{ width: '100%' }}
        >
          {slides.map(i=>(
          <SwiperSlide style={{ textAlign: 'start' }} key={i}>
            <Card sx={{ width: '100%', border: 'none', boxShadow: 'none' }}>
              <Typography component={'div'} sx={{ height: { xs: '200px', sm: '250px', md: '250px', lg: '250px' } }}>
                <Image src={two} alt="two" style={{ width: '100%', height: '100%', borderRadius: '20px' }}  />
              </Typography>
              <CardContent sx={{ padding: '0', paddingTop: '10px' }}>
                <Typography component={"div"} gutterBottom variant="h5" sx={{ display: 'flex', justifyContent: 'space-between', fontSize: { xs: '16px', sm: '20px', md: '20px' } }} >
                  <span>Pakistan, Sindh</span>
                  <span><MdStar /> 5.0</span>
                </Typography>
                <Typography component={"div"} sx={{fontSize:'',color:colors.grey[600]}}>
                  560,2 kilometer away <br /> Feb 26 - Mar 3
                </Typography>
                <Typography component={"div"} variant="h6" >
                  $113 night
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          ))}
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