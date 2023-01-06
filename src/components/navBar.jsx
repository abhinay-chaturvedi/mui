
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled , Toolbar,Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import React from "react";
import { useState } from "react";
const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});
const Search = styled("div")( ({theme})=> ({
    backgroundColor:"grey",
    padding:"0 10px" ,
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}));
const Icons = styled(Box)(({theme})=> ({
    // backgroundColor:"white",
    // color:"black"
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));
const UserBox = styled(Box)(({theme})=>({
    
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}));

const NavBar= ({mode})=>{
    const [open,setOpen]=useState(false)
    return <AppBar position="sticky">
       
        <StyledToolbar>
       
            <Typography variant="h6" sx={{display:{
                xs:"none",
                sm:"block"
            }}}>
            CHATURVEDI
            </Typography>
          <FavoriteIcon sx={{display:{
                xs:"block",
                sm:"none"
            }}}/>
            <Search > <InputBase placeholder="search.."/> </Search>
            <Icons>
            <Badge badgeContent={4} color="error">
           <MailIcon color="action." />
              </Badge>
              <Badge badgeContent={4} color="error">
           {/* <MailIcon color="action." /> */}
           <Notifications/>
              </Badge>
              <Avatar onClick={e=>setOpen(true)}  sx={{width:30,height:30}} src="data:image/jpeg;base64,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"/>
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
                <Avatar sx={{width:30,height:30}} src="data:image/jpeg;base64,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"/>
            <Typography variant="span">
                abhinay
            </Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar> 
    
} 
export default NavBar;