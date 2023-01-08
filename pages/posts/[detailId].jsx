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
import {getHouse} from '../../helper/house';

function Detail() {
  const route = useRouter();
  const {detailId} = route.query;
  const {data,isLoading,isError} = useQuery(['houses',detailId],()=>getHouse(detailId))
  console.log(data);
  if(isLoading){<div>loading...</div>}
  if(isError){<div>error!</div>}
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    if (open) { setOpen(false) } else { setOpen(true) }
  }
  // const {address,amenities,facilities,city,country,imgs,name,price,user,capacity} = data;
 

  return (
    <Typography component='div'>
      <ImagesDrawer handleDrawer={handleDrawer} open={open} />

      <Head handleDrawer={handleDrawer} />
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}>
          <Slider />
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
          <ImagesGrid />
        </Box>
        <Button startIcon={<MdOutlineAutoAwesome />} variant='contained' color='warning' onClick={handleDrawer} size={'small'} sx={{ display:{xs:'none',sm:'flex',md:'flex'}, position: 'absolute', bottom: '15px', right: '15px', zIndex: '111' }}> Show Photos</Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: '20px', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
        {/* details */}
        <Box sx={{ flex: '1', height: '300px' }}>
          <Box sx={{ margin: '10px 0 10px 0' }}>
            <Typography component='div' variant='h5' >Title of post</Typography>
            <Typography component='div' variant='body2'> 12 guests . 6 bedrooms . 6 beds . 8 baths </Typography>
          </Box>
          <Divider />
          <Box sx={{ margin: '10px 0 10px 0' }}>
            <Typography component='div' variant='h5'>Description</Typography>
            <Typography component='div' variant='body2'>house detailed description will be shown here </Typography>
          </Box>
          <Divider />

          <Box sx={{ margin: '10px 0 10px 0' }}>
            <Typography component='div' variant='h5'>Owner</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: '20px' }}>
              <Avatar sx={{ height: 40, width: 40 }} />
              <Box>
                <Typography component='div' variant='body2'>Owner Name</Typography>
                <Typography component='div' variant='caption'>owner@gmail.com</Typography>
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
          <Grid item md={5} sx={{ border: '1px solid lightgrey', display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> grid 1</Grid>
          <Grid item md={5} sx={{ border: '1px solid lightgrey', display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> grid 2</Grid>
          <Grid item md={5} sx={{ border: '1px solid lightgrey', display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> grid 3</Grid>
          <Grid item md={5} sx={{ border: '1px solid lightgrey', display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> grid 4</Grid>
          <Grid item md={5} sx={{ border: '1px solid lightgrey', display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> grid 5</Grid>
          <Grid item md={5} sx={{ border: '1px solid lightgrey', display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> grid 6</Grid>
        </Grid>
      </Box>

      {/* amenities */}

      <Box sx={{ marginTop: '40px' }}>
        <Typography component='div' variant='h5'>Add on services</Typography>
        <Typography component='div' variant='caption' sx={{ marginBottom: '20px' }} >After booking this home, a trip designer can arrange any of these add-on services.</Typography>
        <Grid container md={8} sm={12} sx={{ gap: 2 }}>
          <Grid item md={5} sx={{ border: '1px solid lightgrey', display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> grid 1</Grid>
          <Grid item md={5} sx={{ border: '1px solid lightgrey', display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> grid 2</Grid>
          <Grid item md={5} sx={{ border: '1px solid lightgrey', display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> grid 3</Grid>
          <Grid item md={5} sx={{ border: '1px solid lightgrey', display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> grid 4</Grid>
          <Grid item md={5} sx={{ border: '1px solid lightgrey', display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> grid 5</Grid>
          <Grid item md={5} sx={{ border: '1px solid lightgrey', display: 'flex', alignItems: 'center', gap: 2 }}><MdRadioButtonChecked /> grid 6</Grid>
        </Grid>
      </Box>

    </Typography>
  )
}



export default Detail;

