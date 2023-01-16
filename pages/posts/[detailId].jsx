import { Avatar, Box, Button, Divider, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { MdOutlineAutoAwesome, MdRadioButtonChecked } from 'react-icons/md'
import Head from '../../components/detail/Head';
import ImagesDrawer from '../../components/detail/ImagesDrawer';
import ImagesGrid from '../../components/detail/ImagesGrid';
import ReservationCard from '../../components/detail/ReservationCard';
import ReservationDrawer from '../../components/detail/ReservationDrawer';
import Slider from '../../components/Slider'
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getHouse } from '../../helper/house';

function Detail({ post }) {
  const route = useRouter();
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    if (open) { setOpen(false) } else { setOpen(true) }
  }
console.log(post);
  if(!post){return <div>No data found</div>}
  

  return (
    <Typography component='div'>
      <ImagesDrawer handleDrawer={handleDrawer} open={open} images={post.images} />
      <Head handleDrawer={handleDrawer} post={post} />
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}>
          <Slider images={post.images}/>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
          <ImagesGrid images={post.images}/>
        </Box>
        <Button startIcon={<MdOutlineAutoAwesome />} variant='contained' color='warning' onClick={handleDrawer} size={'small'} sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, position: 'absolute', bottom: '15px', right: '15px', zIndex: '111' }}> Show Photos</Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: '20px', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
        {/* details */}
        <Box sx={{ flex: '1', height: '300px' }}>
          <Box sx={{ margin: '10px 0 10px 0' }}>
            <Typography component='div' variant='h5' >{post.title}</Typography>
            <Typography component='div' variant='body2'> 12 guests . 6 bedrooms . 6 beds . 8 baths </Typography>
          </Box>
          <Divider />
          <Box sx={{ margin: '10px 0 10px 0' }}>
            <Typography component='div' variant='h5'>Description</Typography>
            <Typography component='div' variant='body2'>{post.description} </Typography>
          </Box>
          <Divider />

          <Box sx={{ margin: '10px 0 10px 0' }}>
            <Typography component='div' variant='h5'>Owner</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: '20px' }}>
              <Avatar src={post.user.image} sx={{ height: 40, width: 40 }} />
              <Box>
                <Typography component='div' variant='body2'>{post.user.username}</Typography>
                <Typography component='div' variant='caption'>{post.user.email}</Typography>
              </Box>
            </Box>
          </Box>

        </Box>
        {/* reservation */}
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', flex: '0.3' } }}>
          <ReservationCard />
        </Box>

        <ReservationDrawer />

      </Box>

      {/* included home */}

      <Box sx={{ marginTop: '40px' }}>
        <Typography component='div' variant='h5'>Included with this home</Typography>
        <Typography component='div' variant='caption' sx={{ marginBottom: '20px' }}>Helpful essentials you can expect when booking this home.</Typography>
        <Grid container md={8} sm={12} sx={{ gap: 2 }}>
          {post.facilities.map(i => (
            <Grid key={i} item md={5} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> {i}</Grid>
          ))}
        </Grid>
      </Box>

      {/* amenities */}

      <Box sx={{ marginTop: '40px' }}>
        <Typography component='div' variant='h5'>Add on services</Typography>
        <Typography component='div' variant='caption' sx={{ marginBottom: '20px' }} >After booking this home, a trip designer can arrange any of these add-on services.</Typography>
        <Grid container md={8} sm={12} sx={{ gap: 2 }}>
        {post.amenities.map(i => (
          <Grid key={i} item md={5} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> {i}</Grid>
        ))}
          
        </Grid>
      </Box>

    </Typography>
  )
}


export async function getServerSideProps(context) {
  const URL = process.env.NODE_ENV === 'production' ? 'https://touristapp.vercel.app' : 'http://localhost:3000';

  const { detailId } = context.params;
  const response = await fetch(`${URL}/api/house/${detailId}`);
  const data = await response.json()
  if (!data) { return { notFound: true } }
  return {
    props: { post: data.data }
  }
}

export default Detail;

