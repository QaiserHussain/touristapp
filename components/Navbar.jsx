import { AppBar, Toolbar, Typography, IconButton, Avatar, styled, InputAdornment, Input, Popover } from '@mui/material'
import { useState } from 'react'
import { MdMenu, MdLanguage, MdSearch } from 'react-icons/md'

function Navbar() {
    const [showBar, setShowBar] = useState('-100px');
    const [check, setCheck] = useState(true);
    const [scaling, setScaling] = useState(0);

    const handleSearchBar = () => { if (showBar === '-100px' && check === false) { setShowBar('0'); } else { setShowBar('-100px'); setCheck(true); } }
    const handleScaling = () => { if (scaling === 1) { setScaling(0) } else { setScaling(1); } }
   
    const hidebar = {
        position: 'absolute',
        top: showBar,
        left: '0',
        right: '0',
        backgroundColor: 'white',
        zIndex: '999',
        height: '80px',
        padding: '5px',
        transition: 'ease-in-out 0.5s'
    }
    const scale = {
        position: 'absolute',
        top: '85px',
        right: '10px',
        width: '300px',
        transform: `scale(${scaling})`,
        transition: 'all ease-in-out 0.2s',
        height: '300px',
        padding: '10px',
        border: '1px solid lightgrey',
        borderRadius: '10px',
        // boxShadow: '-1px -1px 5px lightgrey,1px 1px 5px lightgrey',
        backgroundColor:'white',
        zIndex:999
    }
    return (
        <>
            <AppBarNav>
                <Toolbar>
                    <Typography component={'div'} sx={hidebar}>
                        <Input
                            fullWidth
                            disableUnderline
                            sx={{ border: '1px solid lightgrey', borderRadius: '50px', padding: '5px 0px 5px 20px', fontWeight: 'bold' }}
                            placeholder='Search location... '
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton size='large' color='warning' onClick={handleSearchBar}>
                                        <MdSearch />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Typography>
                    <Nav component={'div'}>
                        <Logo component={'div'}>Logo</Logo>
                        <SearchBar component={'div'}>
                            <Input
                                fullWidth
                                disableUnderline
                                sx={{ border: '1px solid lightgrey', borderRadius: '50px', padding: '5px 0px 5px 20px', fontWeight: 'bold' }}
                                placeholder='Search location... '
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton size='large' color='warning' onClick={handleSearchBar}>
                                            <MdSearch />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </SearchBar>
                        <Icons component={'div'}>
                            <IconButton size='large' color='warning'
                                onClick={() => {
                                    if (showBar === '-100px') {
                                        setShowBar('0')
                                        setCheck(false)
                                    } else {
                                        setShowBar('-100px')
                                    }
                                }}
                                sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}
                            >
                                <MdSearch />
                            </IconButton>
                            <IconButton size='large' sx={{ marginRight: '10px' }}><MdLanguage /></IconButton>
                            {/* <Credentials component={'div'}>
                            <IconButton size='large'><MdMenu /></IconButton>
                            <IconButton><Avatar /></IconButton>
                        </Credentials> */}

                            <IconButton onClick={handleScaling}><Avatar /></IconButton>

                            <Typography component='div' sx={scale}>
                                menu items
                            </Typography>
                        </Icons>
                    </Nav>
                </Toolbar>
            </AppBarNav>
        </>
    )
}


const AppBarNav = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'white',
    borderBottom: '1px solid lightgrey',
    boxShadow: 'none',
    color: '#6D6D6D',
}))


const Nav = styled(Typography)(({ theme }) => ({
    display: 'flex',
    flex: '1',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: '10px'
}))


const Logo = styled(Typography)(({ theme }) => ({
    fontSize: '28px',
}))

const SearchBar = styled(Typography)(({ theme }) => ({
    flex: '0.3',
    minWidth: '250px',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}))

const Icons = styled(Typography)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

const Credentials = styled(Typography)(({ theme }) => ({
    border: '1px solid lightgrey',
    borderRadius: '50px',
    width: '120px',
    display: 'flex',
    justifyContent: 'space-between'
}))



export default Navbar;