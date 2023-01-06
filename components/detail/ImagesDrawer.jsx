import { Box, Drawer, IconButton, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { MdClose } from 'react-icons/md'
import itemData from '../../utils/items'

function ImagesDrawer({handleDrawer, open}) {
  return (
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

  )
}

export default ImagesDrawer