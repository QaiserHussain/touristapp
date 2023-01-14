import { Avatar, Button, Divider, ListItemIcon, Menu, MenuItem, Typography, Box, styled } from "@mui/material"
import Link from "next/link"
import { MdFavoriteBorder, MdLogout, MdOutlineHome, MdOutlineManageAccounts, MdOutlinePortrait } from "react-icons/md"
import { useRouter } from 'next/router'
import {useSelector,useDispatch} from 'react-redux'
import { savedUser } from "../store/loginSlice"
function NavbarMenu({ handleMenu, anchorEl, open }) {
    const user = useSelector((state)=>state.login.value)
    const dispatch = useDispatch();
    const logout = ()=>{
        dispatch(savedUser())
    }
    const route = useRouter();
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
                {user ?
                    <>
                        <MenuHead>
                            <Avatar src={user.image} sx={{ height: { xs: '40px', sm: '40px' }, width: { xs: '40px', sm: '40px' } }} />
                            <MenuHeadText>
                                <Typography component='div' variant='body1'>{user.username}</Typography>
                                <Typography component='div' variant='caption'>{user.email}</Typography>
                            </MenuHeadText>
                        </MenuHead>

                        <Link href={`/profile/${user._id}`}>
                            <MenuItem onClick={handleMenu}>
                                <ListItemIcon>
                                    <MdOutlinePortrait fontSize="large" />
                                </ListItemIcon>
                                Profile
                            </MenuItem>
                        </Link>
                        <Link href='/'>
                            <MenuItem onClick={handleMenu}>
                                <ListItemIcon>
                                    <MdFavoriteBorder fontSize="large" />
                                </ListItemIcon>
                                Wishlist
                            </MenuItem>
                        </Link>
                        <Link href='/dashboard/house/add'>
                            <MenuItem onClick={handleMenu}>
                                <ListItemIcon>
                                    <MdOutlineHome fontSize="large" />
                                </ListItemIcon>
                                Create House
                            </MenuItem>
                        </Link>
                        <Link href='/'>
                            <MenuItem onClick={()=>{
                                handleMenu();
                                logout();
                                }}>
                                <ListItemIcon>
                                    <MdLogout fontSize="large" />
                                </ListItemIcon>
                                Sign out
                            </MenuItem>
                        </Link>
                    </>
                    :
                    <MenuFoot>
                        <Typography component='div' variant='caption'>Already have an account ? please sign-in</Typography>
                        <Button variant='contained' color='warning' sx={{marginBottom:'20px'}}
                            onClick={() => {
                                handleMenu()
                                route.push('/signin')
                            }}> Sign In</Button>
                        <Typography component='div' variant='caption'>Do not have any account yet ? please sign-up</Typography>
                        <Button variant='outlined' color='warning'
                            onClick={() => {
                                handleMenu()
                                route.push('/signup')
                            }}
                        > Sign Up</Button>
                    </MenuFoot>
                }



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
    flexDirection:'column',
    justifyContent: 'center',
    padding:'10px 20px'
}))

export default NavbarMenu;