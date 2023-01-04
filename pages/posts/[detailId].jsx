import { Box, Card, CardContent, Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import Image from 'next/image';
import { MdShare, MdSaveAlt, MdFavoriteBorder } from 'react-icons/md'
import one from '../../assets/one.jpg'
function Detail() {

  return (
    <Typography component='div'>
      {/* title */}
      <Typography component='div' sx={{ fontSize: '20px', paddingTop: '20px' }}> Post title should be visible here </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <Typography variant='caption'>
          4.77 . 103 reviews . Dubai . United Arab Emirates
        </Typography>
        <Typography variant='caption' sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}> <MdShare /> Share </Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}> <MdFavoriteBorder /> Save </Typography>
        </Typography>
      </Box>

      {/* images box */}

      <Box sx={{ height: '300px', flex: '1', border: '1px solid lightgrey', borderRadius: '10px', padding: '20px' }}>
        Images Box
      </Box>
      {/* post description */}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: '20px' }}>
        <Box sx={{ border: '1px solid lightgrey', borderRadius: '10px', flex: '1', height: '300px', padding: '10px' }}>
          <Box sx={{ margin: '10px 0 10px 0' }}>
            <Typography component='div' variant='h5' >Title of post</Typography>
            <Typography variant='body2'> 12 guests . 6 bedrooms . 6 beds . 8 baths </Typography>
          </Box>
          <Box sx={{ margin: '10px 0 10px 0' }}>
            <Typography component='div' variant='h5'>Description</Typography>
            <Typography component='div' variant='body2'>house detailed description will be shown here </Typography>
          </Box>
          <Box sx={{ margin: '10px 0 10px 0' }}>
            <Typography component='div' variant='h5'>Owner</Typography>
            <Typography component='div' variant='body2'>Brad Howdson </Typography>
          </Box>
        </Box>
        <Box sx={{ border: '1px solid lightgrey', borderRadius: '10px', flex: '0.3', height: '300px', padding: '10px' }}>

        </Box>
      </Box>

      {/* included home */}

      <Box>
        <Typography component='div' variant='h5'>Included with this home</Typography>
        <Typography component='div' variant='caption'>Helpful essentials you can expect when booking this home.</Typography>

        <Grid container spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {items.map(i => (
            <Grid item xs={6} sm={3} md={2} key={i}>
              <Card sx={{boxShadow:'none'}}>
                <Image src={one} alt={i.title} style={{ width: '100%', height: '150px' }} />
                <CardContent sx={{padding:'0'}}>
                  <Typography variant="body1" component="div">
                    Lizard
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

