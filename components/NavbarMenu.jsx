import { Avatar, Button, Divider, ListItemIcon, Menu, MenuItem, Typography,Box, styled } from "@mui/material"
import { MdFavoriteBorder, MdLogout, MdOutlineManageAccounts, MdOutlinePortrait } from "react-icons/md"


function NavbarMenu({handleMenu, anchorEl, open}) {
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenu}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}

        >
            <Box sx={{ minWidth: { xs: '250px', sm: '250px', md: '250px' } }}>
                <MenuHead>
                    <Avatar sx={{ height: { xs: '40px', sm: '40px' }, width: { xs: '40px', sm: '40px' } }} />
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
    )
}

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

export default NavbarMenu;