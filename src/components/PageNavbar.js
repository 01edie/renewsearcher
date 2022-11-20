import {
  AppBar,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/TravelExplore";
import BadgeIcon from "@mui/icons-material/Badge";
import Person3Icon from '@mui/icons-material/Person3';
import FolderSharedIcon from '@mui/icons-material/FolderShared';

const PageNavbar = ({labFunc}) => {
  const [accountMenu, setAccountMenu] = useState(null);
  const handleClick = (e) => {
    setAccountMenu(e.currentTarget);
  };
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="re search news" onClick={()=>labFunc(false)}>
          <SearchIcon fontSize="large" />
        </IconButton>
        <Typography variant="h5" component="div" flexGrow={1}>
          Renewsearcher
        </Typography>
        <Stack direction="row" spacing="2">
          <Button color="inherit" id="accounts-btn" onClick={handleClick}>
            <BadgeIcon
              sx={{ marginRight: "10px", fontSize: "30px" }}
            ></BadgeIcon>
            <Typography variant='subtitle2' component='div'>Accounts</Typography>
          </Button>
        </Stack>

        <Menu
          anchorEl={accountMenu}
          open={Boolean(accountMenu)}
          onClose={() => setAccountMenu(null)}
          anchorOrigin={{vertical:'bottom',horizontal:'left'}}
          transformOrigin={{vertical:'top',horizontal:'left'}}
         PaperProps={{sx : {
          bgcolor:'grey.400'
         }}
        }
        >
          <MenuItem sx={{gap:'0.75rem',fontWeight:'600'}}><Person3Icon ></Person3Icon>Log In</MenuItem>
          <MenuItem sx={{gap:'0.75rem',fontWeight:'600'}}><FolderSharedIcon></FolderSharedIcon>Register</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default PageNavbar;
