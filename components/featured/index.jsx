import { Grid, Typography } from '@mui/material'
import React from 'react'
import FeaturedCard from './FeaturedCard'
import Link from 'next/link'

function Featured() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <Typography component={'div'} sx={{ margin: { xs: '20px 10px 20px 10px', sm: '20px 10px 50px 10px', md: '80px 20px 50px 20px' } }}>
            <Typography component={'div'} variant='h4'>Features</Typography>
            <Grid container spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center" 
                >
                {items.map(i => (
                    <Grid item xs={12} sm={6} md={3} key={i}>
                       <Link href={'/posts/124'}><FeaturedCard /> </Link>
                    </Grid>
                ))}
            </Grid>
        </Typography>

    )
}

export default Featured