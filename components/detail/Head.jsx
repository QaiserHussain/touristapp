import { Box, Button, Typography } from '@mui/material'
import { MdOutlineAutoAwesome } from 'react-icons/md'

function Head({handleDrawer,post}) {
    return (
        <Box>
            <Typography component='div' variant='h5' sx={{ paddingTop: '20px' }}> {post.title} </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <Typography component='div' variant='caption'>
                    4.77 . 103 reviews . {post.city} . {post.country}
                </Typography>
                {/* <Typography component='div' variant='caption' sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                </Typography> */}
            </Box>

        </Box>
    )
}

export default Head