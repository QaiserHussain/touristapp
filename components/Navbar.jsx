import { colors, AppBar, Toolbar, Typography, IconButton, Avatar, styled, InputAdornment, Input, Menu, MenuItem, Box, ListItemIcon, Button, Divider } from '@mui/material'
import { useState } from 'react'
import { MdMenu, MdLanguage, MdSearch, MdOutlinePortrait, MdOutlineManageAccounts, MdFavoriteBorder, MdLogout } from 'react-icons/md'

function Navbar() {
    const [showBar, setShowBar] = useState('-100px');
    const [check, setCheck] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleSearchBar = () => { if (showBar === '-100px' && check === false) { setShowBar('0'); } else { setShowBar('-100px'); setCheck(true); } }

    const handleMenu = (e) => {
        if (!anchorEl) {
            setAnchorEl(e.currentTarget);
        } else {
            setAnchorEl(null);
        }
    }

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

    return (
        <>
            <AppBarNav>
                <Toolbar>
                    <Typography component={'div'} sx={hidebar}>
                        <Input
                            fullWidth
                            disableUnderline
                            sx={{ border: '1px solid lightgrey', borderRadius: '50px', padding: '2px 0px 2px 15px', fontSize: '12px' }}
                            placeholder='Search location... '
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton size='small' sx={{ color: colors.orange[600] }} onClick={handleSearchBar}>
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
                                sx={{ border: '1px solid lightgrey', borderRadius: '50px', padding: '2px 0px 2px 15px', fontSize: '12px' }}
                                placeholder='Search location... '
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton size='small' sx={{ color: colors.orange[600] }} onClick={handleSearchBar}>
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
                                sx={{ display: { sm: 'none', md: 'none' } }}
                            >
                                <MdSearch />
                            </IconButton>

                            <IconButton size='large' sx={{ marginRight: '10px' }}>
                                <MdLanguage />
                            </IconButton>

                            {/* <Credentials component={'div'}>
                                <IconButton size='large'><MdMenu /></IconButton>
                                <IconButton><Avatar /></IconButton>
                            </Credentials> */}

                            <IconButton
                                type='button'
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleMenu}
                            >
                                <Avatar />
                            </IconButton>
                        </Icons>
                    </Nav>


                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenu}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Box sx={{ minWidth:{xs:'250px',sm:'250px',md:'250px'} }}>
                            <MenuHead>
                                <Avatar sx={{ height:{ xs:'40px',sm:'40px'}, width:{ xs:'40px',sm:'40px'} }} />
                                <MenuHeadText>
                                    <Typography component='div' variant='body1'>Qaiser Hussain</Typography>
                                    <Typography component='div' variant='caption'>qaiserh844@gmail.com</Typography>
                                </MenuHeadText>
                            </MenuHead>

                            <MenuItem onClick={handleMenu}>
                                <ListItemIcon>
                                    <MdOutlinePortrait fontSize="large" />
                                </ListItemIcon>
                                Profile
                            </MenuItem>
                            <MenuItem onClick={handleMenu}>
                                <ListItemIcon>
                                    <MdFavoriteBorder fontSize="large" />
                                </ListItemIcon>
                                Wishlist
                            </MenuItem>
                            <MenuItem onClick={handleMenu}>
                                <ListItemIcon>
                                    <MdOutlineManageAccounts fontSize="large" />
                                </ListItemIcon>
                                Setting
                            </MenuItem>

                            <MenuItem onClick={handleMenu}>
                                <ListItemIcon>
                                    <MdLogout fontSize="large" />
                                </ListItemIcon>
                                Sign out
                            </MenuItem>
                            <Divider />
                            <MenuFoot>
                                <Button variant='contained' color='warning'> SignIn</Button>
                                <Button variant='outlined' color='warning' > SignUp</Button>
                            </MenuFoot>
                        </Box>
                    </Menu>
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
    alignItems: 'center'
}))


const Logo = styled(Typography)(({ theme }) => ({
    fontSize: '28px',
    color: colors.orange[600]
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

const MenuHead = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '10px',
}))
const MenuHeadText = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column'
}))

const MenuFoot = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
}))
// const Credentials = styled(Typography)(({ theme }) => ({
//     border: '1px solid lightgrey',
//     borderRadius: '50px',
//     width: '100px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding:'0px'
// }))



export default Navbar;