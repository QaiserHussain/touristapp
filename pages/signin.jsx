import { Box, Button, TextField, Typography } from "@mui/material";

export default function Signin() {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: { sm: '20px', md: '40px' } }}>
            <Box sx={{ border: '1px solid lightgrey', borderRadius: '10px', padding: '20px 20px', flex:{md:0.3,sm:0.5,xs:1} }}>
                <Typography variant='h5' component='div' sx={{ textAlign: 'center' }}> SIGN IN </Typography>
                <Typography variant='caption' component='div' sx={{ textAlign: 'center', marginBottom: '15px' }}>please sign-in to your account</Typography>
                <Box component='form'>
                    <Box sx={{ marginBottom: '15px' }}>
                        <TextField placeholder="Email" label='Email' fullWidth />
                    </Box>
                    <Box sx={{ marginBottom: '15px' }}>
                        <TextField placeholder="Password" label='Password' fullWidth />
                    </Box>
                    <Box sx={{ padding: '0 40px' }}>
                        <Button type='submit' variant='contained' fullWidth> SIGN IN </Button>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}