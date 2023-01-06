import { Box, Typography, Grid, Divider, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import one from '../../assets/one.jpg'

function Reservation() {
    return (
        <Box sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap-reverse'}}>

            <Box sx={{ flex: 0.5, paddingTop: '50px', }}>
                <Box sx={{ flex: 1, padding: '10px 40px 10px 10px' }}>
                    <Box>
                        <Typography variant='h5' component='div'>Hi, Qaiser Hussain </Typography>
                        <Typography variant='caption' component='div'> Review your booking details to continnue</Typography>
                    </Box>
                    <Typography variant='h5' component='div' sx={{ fontSize: '20px', margin: '20px 0 20px 0' }}> Your trip</Typography>

                    <Box sx={{ margin: '20px 0 20px 0' }}>
                        <Typography variant='h6' component='div'> Dates </Typography>
                        <Typography variant='caption' component='div'> Jan 15 - 20 </Typography>
                    </Box>

                    <Box sx={{ margin: '20px 0 20px 0' }}>
                        <Typography variant='h6' component='div'>Guests </Typography>
                        <Typography variant='caption' component='div'> 1 guest </Typography>
                    </Box>
                </Box>

                {/* <Divider sx={{ width: '500px', marginBottom: '10px' }} /> */}
                   
                   {/* payment and policies */}

                <Box sx={{ maxWidth: '500px' }}>

                    <Box>PAYMENT METHODS</Box>

                    <Divider sx={{ width: '500px', marginBottom: '10px' }} />

                    <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
                        <Typography component='div' variant='h5'> Cancellation policy: Firm 95 days </Typography>
                        <Typography component='div' variant='caption'>
                            Cancel up to 95 days before your trip and only pay 50% of the total accommodation fees for the reservation.
                            Cancel within 95 days of your trip and the reservation is non-refundable.
                            Cancel before 3:00 PM on Jan 7 and only get a refund of the hospitality fee.
                        </Typography>
                    </Box>

                    <Divider sx={{ width: '500px', marginBottom: '10px' }} />

                    <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
                        <Typography component='div' variant='h5'> Your reservation won’t be confirmed until the Host accepts your request (within 24 hours).  </Typography>
                        <Typography component='div' variant='caption'> You won’t be charged until then. </Typography>
                    </Box>

                    <Divider sx={{ width: '500px', marginBottom: '10px' }} />

                    <Button variant='contained' color='warning'>Request to Book</Button>
                </Box>

            </Box>
            
            {/* reservation card deails */}

            <Box sx={{ flex: 1, padding:{sm:'50px 0 0 0',md:'50px 0 0 50px'} }}>
                    <Box sx={{ maxWidth:'400px',minWidth:'250px', border: '1px solid lightgrey', borderRadius: '10px', padding: '20px',marginLeft:'auto',marginRight:'auto' }}>
                        <Box sx={{ display: 'flex', gap: 1, marginBottom: '10px' }}>
                            <Box>
                                <Image src={one} width={80} height={80} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',flex:1 }}>
                                <Box>
                                    <Typography variant='caption' component='div'>Entire home</Typography>
                                    <Typography variant='body1' component='div'>home title or post title</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent:'space-between' }}>
                                    <Typography variant='caption' component='div'>5.0 8 reviews</Typography>
                                    <Typography variant='caption' component='div'>Host: Qaiser hussain</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                        <Typography component='div' variant='caption' sx={{ marginTop: '10px', marginBottom: '10px' }}>your booking is protected by Appname</Typography>
                        <Divider />
                        <Box sx={{ marginBottom: '10px', marginTop: '10px' }}>
                            <Typography component='div' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography component='div' variant='caption'>450 * 5 nights </Typography>
                                <Typography component='div' variant='caption'>2415</Typography>
                            </Typography>
                            <Typography component='div' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography component='div' variant='caption'>Cleaning fee </Typography>
                                <Typography component='div' variant='caption'>500</Typography>
                            </Typography>
                            <Typography component='div' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography component='div' variant='caption'>Service fee </Typography>
                                <Typography component='div' variant='caption'>400</Typography>
                            </Typography>
                            <Typography component='div' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography component='div' variant='caption'>Taxes </Typography>
                                <Typography component='div' variant='caption'>300</Typography>
                            </Typography>

                        </Box>
                        <Divider />
                        <Typography component='div' sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <Typography component='div' variant='h6'>Total - PKR </Typography>
                            <Typography component='div' variant='h6'>8050</Typography>
                        </Typography>
                    </Box>
                </Box>

        </Box>
    )
}

export default Reservation;