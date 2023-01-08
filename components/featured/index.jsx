import { Grid, Typography } from '@mui/material'
import React from 'react'
import FeaturedCard from './FeaturedCard'
import Link from 'next/link'
import {useQuery} from 'react-query'
import {getAllHouse} from '../../helper/house';
function Featured({items}) {
    // const {data,isError, isLoading} = useQuery('houses', getAllHouse);
    // if(isLoading){<div>loading...</div>}
    // if(isError){<div>Error</div>}
    console.log('featured',items);
    return (
        <Typography component={'div'} sx={{ margin: { xs: '20px 10px 20px 10px', sm: '20px 10px 50px 10px', md: '80px 20px 50px 20px' } }}>
            <Typography component={'div'} variant='h4'>Features</Typography>
            <Grid container spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center" 
                >
                {items?.map(item => (
                    <Grid item xs={12} sm={6} md={3} key={item._id}>
                       <Link href={`/posts/${item._id}`}><FeaturedCard item={item} /> </Link>
                    </Grid>
                ))}
            </Grid>
        </Typography>

    )
}

export default Featured