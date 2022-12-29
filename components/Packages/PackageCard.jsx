import { Typography, styled, Card, CardContent, colors } from '@mui/material'
import { MdStar } from 'react-icons/md'
import Image from 'next/image';
import two from '../../assets/two.jpg';

function PackageCard() {

  return (

    <Card sx={{ width: '100%', border: 'none', boxShadow: 'none' }}>
      <Typography component={'div'} sx={{ height: { xs: '200px', sm: '250px', md: '250px', lg: '250px' } }}>
        <Image src={two} alt="two" style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
      </Typography>
      <CardContent sx={{ padding: '0', paddingTop: '10px' }}>
        <Typography component={"div"} gutterBottom variant="h5" sx={{ display: 'flex', justifyContent: 'space-between', fontSize: { xs: '16px', sm: '20px', md: '20px' } }} >
          <span>Pakistan, Sindh</span>
          <span><MdStar /> 5.0</span>
        </Typography>
        <Typography component={"div"} sx={{ fontSize: '', color: colors.grey[600] }}>
          560,2 kilometer away <br /> Feb 26 - Mar 3
        </Typography>
        <Typography component={"div"} variant="h6" >
          $113 night
        </Typography>
      </CardContent>
    </Card>

  )
}

// const Card = styled(Typography)(({theme})=>({
//    width:'300px',
//    height:'300px',
//    border:'1px solid lightgrey',
//    borderRadius:'10px'
// }))
// const PrimaryText = styled(Typography)(({ theme }) => ({
//   padding:'5px',
//   color:'grey',
//   fontSize:'18px'
// }))
// const SecondaryText = styled(Typography)(({ theme }) => ({
//   color:'#6D6D6D',
//   fontSize:'16px'
// }))


export default PackageCard;