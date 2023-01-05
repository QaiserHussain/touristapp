import { Box, Button, Card, CardContent, Divider, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import Image from 'next/image';
import { MdShare, MdSaveAlt, MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md'
import one from '../../assets/one.jpg'
function Detail() {
  const items = [1, 2, 3, 4, 5];
  return (
    <Typography component='div'>
      {/* title */}
      <Typography component='div' variant='h5' sx={{ paddingTop: '20px' }}> Post title should be visible here </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <Typography component='div' variant='caption'>
          4.77 . 103 reviews . Dubai . United Arab Emirates
        </Typography>
        <Typography component='div' variant='caption' sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {/* <Typography component='div' sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}> <MdShare /> Share </Typography> */}
          {/* <Typography component='div' sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}> <MdFavoriteBorder /> Save </Typography> */}
        </Typography>
      </Box>

      {/* images box */}

      <Box sx={{ height: '300px', flex: '1', border: '1px solid lightgrey', borderRadius: '10px', padding: '20px' }}>
        Images Box
      </Box>
      {/* post description */}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: '20px', flexDirection:{xs:'column',sm:'column',md:'row'} }}>
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
                <MenuItem sx={{flex:'1'}}>
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

        <Grid container spacing={3}
          direction="row"
        // justifyContent="center"
        // alignItems="center"
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
        </Grid>

      </Box>
      <Box sx={{ marginTop: '40px' }}>
        <Typography component='div' variant='h5'>Add on services</Typography>
        <Typography component='div' variant='caption' sx={{ marginBottom: '20px' }} >After booking this home, a trip designer can arrange any of these add-on services.</Typography>

        <Grid container spacing={3}
          direction="row"
        // justifyContent="center"
        // alignItems="center"
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
        </Grid>

      </Box>

    </Typography>
  )
}

export default Detail;

