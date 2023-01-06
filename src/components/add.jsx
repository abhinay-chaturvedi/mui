import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material"

import AddIcon from '@mui/icons-material/Add';
import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
const style = {
    width:400,
    height:280,
    // backgroundColor:"white",
    bgcolor:"background.default",
    color:"text.primary",
    p:3,
    borderRadius:5
  };
  const StyledModal=styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center" 
  })
  const UserBox=styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
  })
export const AddPost=()=>{
    const [open,setOpen]=useState(false);
    return (  <>
     <Tooltip title="Post" sx={{
        position:"fixed",
        bottom:20,
        left:{xs:"calc(50% - 25px)",md:30}
    
    }}>

    <Fab color="primary" aria-label="add">
        <AddIcon onClick={e=>setOpen(true)} />
      </Fab>
     </Tooltip>
     <StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  >
         <Typography textAlign="center" variant="h6" fontWeight={500} color="gray">Create Post</Typography>
         <UserBox>
          <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNSK0ndR6NmOEGq91brn0pK8pBHqad1oL7OHtUTmEKVQ&s"
          
          />
          <Typography variant="span">Abhinay chaturvedi</Typography>
         </UserBox>
         <TextField
          id="standard-multiline-static"
          sx={{width:"100%"}}
          multiline
          rows={4}
          placeholder="whats on your's mind."
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotionsIcon/>
          <AddPhotoAlternateOutlinedIcon/>
          <VideoCallOutlinedIcon/>
          <PersonAddOutlinedIcon/>
        </Stack>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>Post</Button>
        <Button><DateRangeIcon/></Button>
        
      </ButtonGroup>
        </Box>
      </StyledModal>
    </>
    )
}