import { Typography, styled, Card, CardContent, colors } from '@mui/material'
import { MdStar } from 'react-icons/md'
import Image from 'next/image';
import two from '../../assets/one.jpg';
function FeaturedCard({item}) {
    return (
        <Card sx={{ width:'100%', border: 'none', boxShadow: 'none' }}>
            <Typography component={'div'} sx={{ height: { xs: '200px', sm: '250px', md: '250px', lg: '250px' } }}>
                <Image src={item.images[0]} width={100} height={100} alt={item.images[0]} style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
            </Typography>
            <CardContent sx={{ padding: '0', paddingTop: '10px' }}>
                <Typography component={"div"} gutterBottom variant="h5" sx={{ display: 'flex', justifyContent: 'space-between', fontSize: { xs: '16px', sm: '20px', md: '20px' } }} >
                    <span>{`${item.country} , ${item.city}`}</span>
                    <span><MdStar /> 5.0</span>
                </Typography>
                <Typography component={"div"} gutterBottom sx={{ fontSize: '', color: colors.grey[600] }}>
                       {item.address}
                </Typography>
                <Typography component={"div"} variant="h6" >
                    PKR {item.price} night
                </Typography>
            </CardContent>
        </Card>

    )
}

export default FeaturedCard;