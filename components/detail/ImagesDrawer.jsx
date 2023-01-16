import { Box, Drawer, IconButton, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { MdClose } from 'react-icons/md'
import itemData from '../../utils/items'

function ImagesDrawer({handleDrawer, open,images}) {

  return (
    <Drawer
        anchor={'bottom'}
        open={open}
      // onClose={close}
      >
        <Box sx={{ padding: '20px', position: 'relative',overflowY:'auto' }}>
          <IconButton onClick={handleDrawer} color='warning' ><MdClose /> </IconButton>
          <ImageList variant="masonry" cols={3} gap={8}>
            {images.map((image) => (
              <ImageListItem key={image}>
                <img
                  src={image}
                  srcSet={image}
                  alt={image}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Drawer>

  )
}

export default ImagesDrawer