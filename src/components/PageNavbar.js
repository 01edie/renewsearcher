import {
  AppBar,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  Avatar,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/TravelExplore";
import BadgeIcon from "@mui/icons-material/Badge";
import Person3Icon from "@mui/icons-material/Person3";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import { grey } from "@mui/material/colors";

const PageNavbar = ({
  labFunc,
  setIsRegistrationOpen,
  setIsFeaturesOpen,
  setSignDialog,
  signedIn,
  setSignedIn,
}) => {
  const [accountMenu, setAccountMenu] = useState(null);
  const handleClick = (e) => {
    setAccountMenu(e.currentTarget);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="re search news"
          onClick={() => {
            labFunc(false);
            setIsRegistrationOpen(false);
            setIsFeaturesOpen(false);
          }}
        >
          <SearchIcon fontSize="large" />
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{ "&:hover": { cursor: "pointer" } }}
          flexGrow={1}
          onClick={() => {
            labFunc(false);
            setIsRegistrationOpen(false);
            setIsFeaturesOpen(false);
          }}
        >
          Renewsearcher
        </Typography>
        <Stack direction="row" spacing="2">
          {/* while signed in */}
          {signedIn.status ? (
            <Button color="inherit" id="accounts-btn" onClick={handleClick}>
              <Avatar sx={{bgcolor:'success.light'}}>{signedIn.data.firstName.slice(0, 1)}</Avatar>
              <Typography variant="h6" component='h6' ml={2}>{signedIn.data.firstName}</Typography>
            </Button>
          ) : 
          // while not signed in
          (   
            <Button color="inherit" id="accounts-btn" onClick={handleClick}>
              <BadgeIcon
                sx={{ marginRight: "10px", fontSize: "30px" }}
              ></BadgeIcon>

              <Typography variant="subtitle2" component="div">
                Accounts
              </Typography>
            </Button>
          )}
        </Stack>

        <Menu
          anchorEl={accountMenu}
          open={Boolean(accountMenu)}
          onClose={() => setAccountMenu(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          PaperProps={{
            sx: {
              bgcolor: grey[100],
            },
          }}
        >
          {signedIn.status ? (
            <Box>
              <MenuItem
                sx={{ gap: "0.75rem", fontWeight: "600" }}
                onClick={() =>{
                  setSignedIn((state) => {
                    return { ...state, status: false };
                  });
                  setAccountMenu(null);
                }
                }
              >
                <Person3Icon></Person3Icon>Log Out
              </MenuItem>
            </Box>
          ) : (
            <Box>
              <MenuItem
                sx={{ gap: "0.75rem", fontWeight: "600" }}
                onClick={() => {setSignDialog(true);setAccountMenu(null);}}
              >
                <Person3Icon></Person3Icon>Log In
              </MenuItem>
              <MenuItem
                sx={{ gap: "0.75rem", fontWeight: "600" }}
                onClick={() => {
                  setIsRegistrationOpen(true);
                  labFunc(false);
                  setIsFeaturesOpen(false);
                  setAccountMenu(null);
                }}
              >
                <FolderSharedIcon></FolderSharedIcon>Register
              </MenuItem>
            </Box>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default PageNavbar;
