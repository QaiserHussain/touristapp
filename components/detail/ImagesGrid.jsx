import { Grid } from '@mui/material'
import Image from 'next/image'
import one from '../../assets/one.jpg'

function ImagesGrid({images}) {
  return (
    <Grid container sx={{ height: '300px' }}>
        <Grid item md={6} sm={6} sx={{ height: '300px', paddingRight: '10px' }}>
          <Image src={images[0]} width={100} height={100} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        </Grid>
        <Grid item md={6} sm={6} sx={{ height: '300px' }}>
          <Grid container>
            <Grid container md={12}>
              <Grid item md={6} sm={6} sx={{ height: '150px', paddingRight: '5px', paddingBottom: '5px' }}>
                <Image src={images[1]} width={100} height={100} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </Grid>
              <Grid item md={6} sm={6} sx={{ height: '150px', paddingLeft: '5px', paddingBottom: '5px' }}>
                <Image src={images[2]} width={100} height={100} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </Grid>
            </Grid>
            <Grid container md={12}>
              <Grid item md={6} sm={6} sx={{ height: '150px', paddingTop: '5px', paddingRight: '5px' }}>
                <Image src={images[3]} width={100} height={100} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </Grid>
              <Grid item md={6} sm={6} sx={{ height: '150px', paddingTop: '5px', paddingLeft: '5px' }}>
                <Image src={images[4]} width={100} height={100} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default ImagesGrid