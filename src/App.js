import React, { useState } from "react";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import Feed from "./components/feed";
import RightBar from "./components/rightBar";
import Button from '@mui/material/Button';

import { Box } from "@mui/system";
import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { AddPost } from "./components/add";

const DarkTheme=createTheme({
  palette:{
    mode:""
  }
})

function App() {
  const [mode,setMode]=useState("light")
  const DarkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={DarkTheme}>

    <Box bgcolor="background.default" color={"text.primary"} >
     <NavBar mode={mode}/>
     <Stack direction="row" spacing={2} justifyContent="space-between">
     <SideBar setMode={setMode} mode={mode}/>
     <Feed/>
     <RightBar/>
     </Stack>
     <AddPost/>
    </Box>
   
    </ThemeProvider>
  );
}

export default App;
