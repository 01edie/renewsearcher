import {
  Grid,
  Typography,
  Box,
  Drawer,
  IconButton,
  Tooltip,
  Zoom,
  
} from "@mui/material";
import React, { useState } from "react";

import { Menu } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import RecentCards from "./RecentCards";
import LandingFeatures from "./LandingFeatures";
import DrawerList from "./DrawerList";
import Lab from "./Lab";



const Main = ({isLabOpen, setIsLabOpen}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // styled tooltip
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));
  // ................
  return (
    <>
      {/* drawer button */}
      <Box sx={{ position: "absolute" }}>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Panel</Typography>
              <p>
                In panel you can go to{" "}
                <b>
                  <u>Lab</u>
                </b>{" "}
                , where you can access the features and search for news the way
                you want{" "}
              </p>
            </React.Fragment>
          }
          placement="right"
          enterDelay={100}
          leaveDelay={200}
          TransitionComponent={Zoom}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="panel"
            onClick={() => setIsDrawerOpen(true)}
          >
            {/* <BackupTableIcon sx={{fontSize:'42px',margin:'0px 10px'}} ></BackupTableIcon> */}
            <Menu sx={{ fontSize: "24px", margin: "0px 10px" }}></Menu>
          </IconButton>
        </HtmlTooltip>
      </Box>
      {/* Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        
        <DrawerList labFunc={setIsLabOpen} drawerFunc={setIsDrawerOpen}/>
      </Drawer>
      {/* .......... */}


      {/* main container */}
      <Grid container>
          {isLabOpen?(<Lab/>):
          <>
          {/* features grid */}
        <LandingFeatures />
        {/* landing page recent news cards  container */}
        <RecentCards />
          </>
          }
        
      </Grid>
    </>
  );
};

export default Main;
