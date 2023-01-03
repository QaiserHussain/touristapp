import { AppBar, styled, Toolbar, Typography, colors, IconButton, Button, useTheme } from '@mui/material'
import { MdOutlineHouse, MdOutlineFilterAlt, MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Modal from './Modal';

function NavbarChild() {
    const [screenSize, setScreenSize] = useState(0);
    const [open, setOpen] = useState(false);
    const items = [
        { id: 1, name: 'Desert' }, { id: 2, name: 'Maldieves' }, { id: 3, name: 'India' }, { id: 4, name: 'Pakistan' },
        { id: 5, name: 'Austrailia' }, { id: 6, name: 'Japan' }, { id: 7, name: 'China' }, { id: 8, name: 'Sirilanka' },
        { id: 9, name: 'Islamabad' }, { id: 10, name: 'Karachi' }, { id: 11, name: 'Balochistan' }, { id: 12, name: 'Sindh' },
        { id: 13, name: 'Punjab' }, { id: 14, name: 'Sialkot' }, { id: 15, name: 'Gujranwala' }, { id: 16, name: 'Sukkur' },
        { id: 17, name: 'Saudi' }, { id: 18, name: 'Dubai' }, { id: 19, name: 'Rawalpindi' }, { id: 20, name: 'Larkana' },
    ]

    const handleRight = (e) => {
        const wrapbox = document.querySelector('.wrapbox');
        wrapbox.scrollLeft += 80;
        console.log('clicked right');
    }
    const handleLeft = () => {
        const wrapbox = document.querySelector('.wrapbox');
        wrapbox.scrollLeft += -60;
        console.log('clicked left');
    }

    const handleModal = ()=>{
     if(!open){
        setOpen(true)
     }else{
        setOpen(false)
     }
    }

    function screenWidth() {
        setScreenSize(screen.width)
        setScreenSize(window.innerWidth);
    }
    useEffect(() => {
        window.onresize = screenWidth;
    }, [])

    return (
        <ChildNav>
            <Toolbar>
                <NavWrapper component='div'>
                    <IconButtonLeft component='div' onClick={handleLeft}><MdChevronLeft style={{ fontSize: '30px', color: colors.grey[600], background: colors.grey[200], borderRadius: '50%', padding: '5px' }} /></IconButtonLeft>
                    <WrapBox component='div' className='wrapbox'>
                        {items.map(i => (
                            <Link href={''} passHref key={i.id} >
                                <NavContent component="div" >
                                    <IconButton sx={{color: colors.grey[500],padding:'0'}}>
                                        <MdOutlineHouse />
                                    </IconButton>
                                    <Typography component='span' sx={{ color: colors.grey[600], fontSize:'12px'}}> {i.name} </Typography>
                                </NavContent>
                            </Link>
                        ))
                        }
                    </WrapBox>
                    <IconButtonRight component='div' onClick={handleRight}><MdChevronRight style={{ fontSize: '30px', color: colors.grey[600], background: colors.grey[200], borderRadius: '50%', padding: '5px' }} /></IconButtonRight>
                </NavWrapper>
                {screenSize < 600 ?
                    <IconButton sx={{ color: colors.orange[600] }} onClick={handleModal} >
                        <MdOutlineFilterAlt />
                    </IconButton>
                    :
                    <Button variant='contained' size='small' color='primary' onClick={handleModal} startIcon={<MdOutlineFilterAlt />}>Filter</Button>
                }

                <Modal open={open} handleModal={handleModal} />

            </Toolbar>
        </ChildNav >

    )
}
const ChildNav = styled(AppBar)(({ theme }) => ({
    zIndex:200,
    backgroundColor: 'white',
    marginTop: '49px',
    minHeight: '30px',
    boxShadow: 'none',
    borderBottom: '1px solid lightgrey',
    [theme.breakpoints.down('sm')]: {
        marginTop: '45px',
    }
}))

const NavWrapper = styled(Typography)(({ theme }) => ({
    display: 'flex',
    flex: '1',
    overflowX: 'hidden',
    position: 'relative',
    padding: '0 25px',
    marginRight: '10px',
    scrollBehavior: 'smooth',
    [theme.breakpoints.down('sm')]: {
        overflowX: 'auto',
        padding: '0'
    }
}))
const WrapBox = styled(Typography)(({ theme }) => ({
    display: 'flex',
    flex: '1',
    overflowX: 'hidden',
    gap: '20px',
    scrollBehavior: 'smooth',
    marginRight: '10px',
    padding: '5px 0',
    [theme.breakpoints.down('sm')]: {
        marginRight: '2px',
        overflowX: 'auto',
        gap:'10px',
        '&::-webkit-scrollbar': {
            height:'5px'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 5px lightgrey',
            borderRadius: '10px'
        },
        '&::-webkit-scrollbar-thumb': {
            background: colors.grey[400],
            borderRadius: '10px'
        },

    }
}))
const IconButtonLeft = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    left: '0px',
    background: 'linear-gradient(90deg, white 70%, transparent)',
    width: '50px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }

}))
const IconButtonRight = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    right: '0px',
    background: 'linear-gradient(-90deg, white 70%, transparent)',
    width: '50px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}))


const NavContent = styled(Typography)(({ theme }) => ({
    padding: '2px 10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'ease-in-out all 0.3s',
    '&:hover': {
        backgroundColor: colors.grey[100],
    }
}))
export default NavbarChild;