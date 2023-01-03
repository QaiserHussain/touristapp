import { colors, AppBar, Toolbar, Typography, IconButton, Avatar, styled, InputAdornment, Input, Menu, MenuItem, Box, ListItemIcon, Button, Divider } from '@mui/material'
import { useState } from 'react'
import { MdMenu, MdLanguage, MdSearch, MdOutlinePortrait, MdOutlineManageAccounts, MdFavoriteBorder, MdLogout } from 'react-icons/md'
import NavbarMenu from './NavbarMenu';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'



function Navbar() {
    const [showBar, setShowBar] = useState('-100px');
    const [check, setCheck] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const selectionRange = { startDate: startDate, endDate: endDate, key: 'selection' }
    const handleSelect = (ranges) => { setStartDate(ranges.selection.startDate); setEndDate(ranges.selection.endDate); }

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
                            value={searchInput}
                            onChange={(e) => { setSearchInput(e.target.value) }}
                            sx={{ border: '1px solid lightgrey', borderRadius: '50px', padding: '2px 0px 2px 15px', fontSize: '12px' }}
                            placeholder='Search location...'
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
                                value={searchInput}
                                onChange={(e) => { setSearchInput(e.target.value) }}
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
                            {searchInput && (
                                <div style={{position:'fixed',top:'50px',zIndex:'1100 important!'}}>
                                    <DateRangePicker
                                        ranges={[selectionRange]}
                                        minDate={new Date()}
                                        rangeColors={['#FD5B6L']}
                                        onChange={handleSelect}
                                        direction={'horizontal'}
                                    />
                                </div>
                            )}
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
                </Toolbar>
            </AppBarNav>
            <NavbarMenu anchorEl={anchorEl} handleMenu={handleMenu} open={open} />

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

// const Credentials = styled(Typography)(({ theme }) => ({
//     border: '1px solid lightgrey',
//     borderRadius: '50px',
//     width: '100px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding:'0px'
// }))



export default Navbar;