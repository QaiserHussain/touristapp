import { Box, Button, Card, CardContent, Divider, Drawer, FormControl, Grid, IconButton, ImageList, ImageListItem, InputLabel, MenuItem, TextField, Typography } from '@mui/material'
import Image from 'next/image';
import { useState } from 'react';
import { MdShare, MdSaveAlt, MdAddCircleOutline, MdRemoveCircleOutline, MdClose, MdOutlineAutoAwesome } from 'react-icons/md'
import one from '../../assets/one.jpg'
import Slider from '../../components/Slider'
function Detail() {
  const items = [1, 2, 3, 4, 5];
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ];
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    if (open) { setOpen(false) } else { setOpen(true) }
  }
  return (
    <Typography component='div'>
      {/* title */}
      <Typography component='div' variant='h5' sx={{ paddingTop: '20px' }}> Post title should be visible here </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <Typography component='div' variant='caption'>
          4.77 . 103 reviews . Dubai . United Arab Emirates
        </Typography>
        <Typography component='div' variant='caption' sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button startIcon={<MdOutlineAutoAwesome />} variant='contained' onClick={handleDrawer} size={'small'}>Photos</Button>
        </Typography>
      </Box>

      <Drawer
        anchor={'bottom'}
        open={open}
        // onClose={close}
      >
        <Box sx={{ padding: '20px', position: 'relative' }}>
          <IconButton onClick={handleDrawer} color='warning' ><MdClose /> </IconButton>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Drawer>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: '20px', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
        <Box sx={{ border: '1px solid lightgrey', borderRadius: '10px', flex: '1', height: '300px', padding: '10px' }}>
          <Box sx={{ margin: '10px 0 10px 0' }}>
            <Typography component='div' variant='h5' >Title of post</Typography>
            <Typography component='div' variant='caption'> 12 guests . 6 bedrooms . 6 beds . 8 baths </Typography>
          </Box>
          <Box sx={{ margin: '10px 0 10px 0' }}>
            <Typography component='div' variant='h5'>Description</Typography>
            <Typography component='div' variant='caption'>house detailed description will be shown here </Typography>
          </Box>
          <Box sx={{ margin: '10px 0 10px 0' }}>
            <Typography component='div' variant='h5'>Owner</Typography>
            <Typography component='div' variant='caption'>Brad Howdson </Typography>
          </Box>
        </Box>

        <Box sx={{ border: '1px solid lightgrey', position: 'relative', borderRadius: '10px', flex: '0.3', height: '300px', padding: '10px' }}>

          <Typography component='div' variant='caption' sx={{ padding: '0px 5px' }}> $1500 night</Typography>
          <Box sx={{ border: '1px solid lightgrey', borderRadius: '10px' }}>
            <Box sx={{ display: 'flex', gap: '2', borderBottom: '1px solid lightgrey' }}>
              <Box sx={{ flex: '1', padding: '5px 10px' }}>
                <Typography component='div' variant='body2'>CHECK IN</Typography>
                <Typography component='div' variant='caption'>1/4/2023</Typography>
              </Box>
              <Divider orientation='vertical' flexItem />
              <Box sx={{ flex: '1', padding: '5px 10px' }}>
                <Typography component='div' variant='body2'>CHECK OUT</Typography>
                <Typography component='div' variant='caption'>1/6/2023</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                select
                size='small'
                variant='standard'
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <Box sx={{ flex: '1', padding: '5px 10px' }}>
                      <Typography component='div' variant='body2'>GUESTS</Typography>
                      <Typography component='div' variant='caption'>1 guest</Typography>
                    </Box>
                  )
                }}
                sx={{ marginRight: '10px' }}
              >
                <MenuItem sx={{ flex: '1' }}>
                  <Box sx={{ flex: '1', padding: '5px 10px' }}>
                    <Typography component='div' variant='body1'>Adults</Typography>
                    <Typography component='div' variant='caption'>Age 13+</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
                    <IconButton><MdRemoveCircleOutline /></IconButton>
                    <Typography variant='body2'>1</Typography>
                    <IconButton> <MdAddCircleOutline /> </IconButton>
                  </Box>
                </MenuItem>
                <MenuItem >
                  <Box sx={{ flex: '1', padding: '5px 10px' }}>
                    <Typography component='div' variant='body1'>Children</Typography>
                    <Typography component='div' variant='caption'>Age 2 - 12</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
                    <IconButton><MdRemoveCircleOutline /></IconButton>
                    <Typography variant='body2'> 0 </Typography>
                    <IconButton> <MdAddCircleOutline /> </IconButton>
                  </Box>
                </MenuItem>

              </TextField>
            </Box>
          </Box>

          <Box sx={{ padding: '10px 20px' }}>
            <Button type='button' variant='contained' fullWidth>Reserved</Button>
            <Typography variant='caption' component='div' sx={{ textAlign: 'center', marginTop: '10px' }} >you was not be charged yet</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <Typography variant='body2'>$1500 * 2 nights</Typography>
            <Typography variant='body2'>$3000</Typography>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Typography variant='body2'>Total before taxes</Typography>
            <Typography variant='body2'>$3000</Typography>
          </Box>
        </Box>
      </Box>

      {/* included home */}

      <Box sx={{ marginTop: '40px' }}>
        <Typography component='div' variant='h5'>Included with this home</Typography>
        <Typography component='div' variant='caption' sx={{ marginBottom: '20px' }}>Helpful essentials you can expect when booking this home.</Typography>

        <Box sx={{width:'50%',paddingLeft:'20px'}}>
          <ul style={{display:'flex', flexWrap:'wrap'}}>
            <li style={{width:'150px'}}>wifi</li>
            <li style={{width:'150px'}}>shower</li>
            <li style={{width:'150px'}}>kitchen</li>
            <li style={{width:'150px'}}>tea service</li>
            <li style={{width:'150px'}}>bath</li>
            <li style={{width:'150px'}}>beds</li>
            <li style={{width:'150px'}}>chairs</li>
            <li style={{width:'150px'}}>sad</li>
            <li style={{width:'150px'}}>dasdas</li>
            <li style={{width:'150px'}}>dasd</li>
            <li style={{width:'150px'}}>dasd</li>
            <li style={{width:'150px'}}>dsa</li>
            <li style={{width:'150px'}}>das</li>
            <li style={{width:'150px'}}>dsa</li>
            <li style={{width:'150px'}}>dsad</li>
            <li style={{width:'150px'}}>dasd</li>
          </ul>
        </Box>  

      </Box>
      <Box sx={{ marginTop: '40px' }}>
        <Typography component='div' variant='h5'>Add on services</Typography>
        <Typography component='div' variant='caption' sx={{ marginBottom: '20px' }} >After booking this home, a trip designer can arrange any of these add-on services.</Typography>

        <Box sx={{width:'50%',paddingLeft:'20px'}}>
          <ul style={{display:'flex', flexWrap:'wrap'}}>
            <li style={{width:'150px'}}>wifi</li>
            <li style={{width:'150px'}}>shower</li>
            <li style={{width:'150px'}}>kitchen</li>
            <li style={{width:'150px'}}>tea service</li>
            <li style={{width:'150px'}}>bath</li>
            <li style={{width:'150px'}}>beds</li>
            <li style={{width:'150px'}}>chairs</li>
            <li style={{width:'150px'}}>sad</li>
            <li style={{width:'150px'}}>dasdas</li>
            <li style={{width:'150px'}}>dasd</li>
            <li style={{width:'150px'}}>dasd</li>
            <li style={{width:'150px'}}>dsa</li>
            <li style={{width:'150px'}}>das</li>
            <li style={{width:'150px'}}>dsa</li>
            <li style={{width:'150px'}}>dsad</li>
            <li style={{width:'150px'}}>dasd</li>
          </ul>
        </Box>  
        

        {/* <Grid container spacing={3}
          direction="row"
        >
          {items.map(i => (
            <Grid item xs={6} sm={4} md={3} key={i}>
              <Card sx={{ boxShadow: 'none' }}>
                <Image src={one} alt={i} style={{ width: '100%', height: '150px' }} />
                <CardContent sx={{ padding: '0' }}>
                  <Typography variant="body1" component="div">
                    picture name
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> */}

      </Box>

    </Typography>
  )
}

export default Detail;

