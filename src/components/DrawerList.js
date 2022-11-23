import React from "react";
import {
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import RegisterIcon from "@mui/icons-material/AppRegistration";
import SearchIcon from "@mui/icons-material/YoutubeSearchedFor";
import FeaturesIcon from "@mui/icons-material/FeaturedPlayList";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const DrawerList = ({
  labFunc,
  drawerFunc,
  setIsRegistrationOpen,
  setIsFeaturesOpen,
  signedIn,
}) => {
  const iconButtonStyles = {
    fontSize: "24px",
    transition: "all 0.25s",
    "&:hover": { fontSize: "36px" },
  };
  return (
    <Stack
      justifyContent="space-between"
      sx={{ paddingBottom: "24px" }}
      width={{ xs: "225px", sm: "250px", md: "350px" }}
      height="100%"
    >
      <List disablePadding>
        {/* Panel Heading */}
        <Box textAlign="center" role="presentation">
          <Typography variant="h6" component="div" mt="10px">
            Panel
          </Typography>
          <Divider sx={{ margin: "10px 2px", borderBottomWidth: "3px" }} />
        </Box>
        {/* panel list */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              labFunc(true);
              drawerFunc(false);
              setIsRegistrationOpen(false);
              setIsFeaturesOpen(false);
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <SearchIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Lab"
              secondary="Refine, Store and Read your searchings at one place."
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setIsRegistrationOpen(false);
              labFunc(false);
              drawerFunc(false);
              setIsFeaturesOpen(true);
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "success.light" }}>
                <FeaturesIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Features"
              secondary="Check out the features available for free users and registered users"
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        {signedIn ? null : (
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setIsRegistrationOpen(true);
                labFunc(false);
                drawerFunc(false);
                setIsFeaturesOpen(false);
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "error.light" }}>
                  <RegisterIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Register"
                secondary="Go for a quick registration to use full fledged functionalities"
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>
      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton href="https://fb.com" target="_blank">
          <FacebookIcon sx={{ ...iconButtonStyles, color: "#3b5998" }} />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank">
          <TwitterIcon
            sx={{ ...iconButtonStyles, color: "#1DA1F2" }}
          ></TwitterIcon>
        </IconButton>
        <IconButton href="https://github.com" target="_blank">
          <GitHubIcon sx={{ ...iconButtonStyles, color: "black" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default DrawerList;
