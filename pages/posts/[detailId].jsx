import { Box, Typography } from '@mui/material'
import { MdShare, MdSaveAlt, MdFavoriteBorder } from 'react-icons/md'

function Detail({ houses }) {
  console.log(houses);
  return (
    <Typography component='div'>

      {/* title */}

      <Typography compoent='div' sx={{ fontSize: '20px' }}>Post title should be visible here</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <Typography variant='caption'>
          4.77 . 103 reviews . Dubai . United Arab Emirates
        </Typography>
        <Typography variant='caption' sx={{ display: 'flex', gap: 2 }}>
          <span><MdShare /> Share</span>
          <span><MdFavoriteBorder /> Save</span>
        </Typography>
      </Box>

      {/* images box */}

      <Box sx={{ height: '300px', flex: '1', border: '1px solid lightgrey', borderRadius: '10px', padding: '20px' }}>
        Images Box
      </Box>

      {/* post description */}

      <Box>

      </Box>

    </Typography>
  )
}

export default Detail;

