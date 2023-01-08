import { Avatar, Box, Button, TextField, Typography } from "@mui/material";

export default function Profile() {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center',paddingTop:{sm:'20px',md:'40px'} }}>
            <Box sx={{ border: '1px solid lightgrey', borderRadius: '10px', padding: '20px 20px', flex:{md:0.4,sm:0.6,xs:1}}}>
                <Typography variant='h5' component='div' sx={{textAlign:'center'}}> Profile </Typography>
                <Typography variant='caption' component='div' sx={{textAlign:'center',marginBottom:'15px'}}>you can update your profile</Typography>
                <Box component='form'>
                    <Box sx={{display:'flex',justifyContent:'center', marginBottom:'20px'}}>
                        <Avatar sx={{height:'100px',width:'100px'}}/>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, marginBottom:'15px' }}>
                        <TextField placeholder="First Name" label='First Name' fullWidth size='small' />
                        <TextField placeholder="Last Name" label='Last Name' fullWidth size='small'/>
                    </Box>
                    <Box sx={{marginBottom:'15px'}}>
                        <TextField placeholder="Email" label='Email' fullWidth size='small' />
                    </Box>
                    <Box sx={{marginBottom:'15px'}}>
                        <TextField placeholder="Password" label='Password' fullWidth size='small' />
                    </Box>
                    <Box sx={{padding:'0 40px'}}>
                        <Button type='submit' variant='contained' fullWidth> Update </Button>
                    </Box>
                    <Typography variant="caption" component='div' sx={{textAlign:'center'}}> come back later ? <span>Logout</span> </Typography>
                </Box>
            </Box>
        </Box>

    )
}