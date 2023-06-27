import { useState } from "react";


import { Link } from "react-router-dom";

import Search from "./Search";
import CustomButtons from "./CustomButtons";

import { AppBar,Toolbar,Drawer,Box,Typography, IconButton,List,ListItem, styled } from "@mui/material";
import { Menu} from '@mui/icons-material';



const StyledHeader  = styled(AppBar)`
background: #2874f0;
height: 55px`;

const Components  = styled(Link)`
margin-left: 12%; 
line-height : 0;
cursor: pointer;
text-decoration: none`;

const SubHeading = styled(Typography)`
font-size: 10px; 
font-style: italic`;

const PlusImg = styled("img")({
    width: 10,
    height: 10,
    marginLeft: 4
    
})
const CustomButtonWrapper = styled(Box)(({theme})=> ({
    margin: "0 5% 0 auto",
    [theme.breakpoints.down("md")]:{
        display: "none",
    }
}));

const MenuButton = styled(IconButton)(({theme}) => ({
    display: "none",
    [theme.breakpoints.down("md")]:{
        display: "block"
    }
}))

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open,setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const list = () => (
        <Box style={{width: 200}} onClick={handleClose}>
            <List>
                <ListItem>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    )
    return(<div>
        <StyledHeader>
            <Toolbar style={{minHeight: 55}}>
            <MenuButton  color="inherit" onClick={handleOpen}>
                <Menu/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer>
                    <Components to="/" >
                        <img src={logoURL} alt="logo" style={{width: 75}} />
                        <Box style={{display:"flex"}}>
                            <SubHeading>Explore <Box component="span" style ={{color: "#ffe500"}}>Plus</Box></SubHeading>
                            <PlusImg src={subURL} alt="sub-logo"/>
                        </Box>
                    </Components>
                
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    </div>)
}

export default Header