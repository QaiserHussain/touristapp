import { Box, Button, Divider, IconButton, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md'
import {useRouter} from 'next/router'

function ReservationCard() {
  const route = useRouter();
  const handleReservation = ()=>{
    route.push('/reservation')
  }

  return (
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
      <Button type='button' variant='contained' fullWidth onClick={handleReservation}>Reserved</Button>
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
  )
}

export default ReservationCard