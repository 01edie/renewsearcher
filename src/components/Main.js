import {
  Grid,
  Typography,
  Box,
  Drawer,
  IconButton,
  Tooltip,
  Zoom,
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  TextField,
  FormHelperText,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState, forwardRef } from "react";

import { Menu } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import DrawerList from "./DrawerList";
import PageManager from "./PageManager";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props}></Alert>;
});

const Main = ({
  isLabOpen,
  setIsLabOpen,
  isRegistrationOpen,
  setIsRegistrationOpen,
  isFeaturesOpen,
  setIsFeaturesOpen,
  signInDialog,
  setSignDialog,

  signedIn,
  setSignedIn,
}) => {
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
  //sign in form hooks and handler
  // schema
  const schema = yup.object().shape({
    email: yup.string().required().email('Invalid Email'),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [authFail, setAuthFail] = useState(false);

  const testUserDetails = [
    {
      firstName: "Biswajit",
      email: "01bbose@gmail.com",
      password: "pass",
    },
    {
      firstName: "User",
      email: "a@a.c",
      password: "aaaa",
    },
  ];
  const logInHandler = (data) => {
    console.log(data);
    const tmpUser = testUserDetails.find((user) => user.email === data.email);
    if (tmpUser.password === data.password) {
      setAuthFail(false);
      console.log("authentication successful");
      setSignedIn((val) => {
        return { ...val, status: true, data: tmpUser };
      });
      setIsLabOpen(false);
      setIsRegistrationOpen(false);
      setIsFeaturesOpen(false);

      setSignDialog(false);
      setOpenToast(true);
    } else {
      setAuthFail(true);
    }
  };
  //signed in toast and handler
  const handleCloseToast = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToast(false);
  };
  const [openToast, setOpenToast] = useState(false);

  // ................
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        <DrawerList
          labFunc={setIsLabOpen}
          drawerFunc={setIsDrawerOpen}
          setIsRegistrationOpen={setIsRegistrationOpen}
          setIsFeaturesOpen={setIsFeaturesOpen}
          signedIn={signedIn.status}
        />
      </Drawer>
      {/* .......... */}

      {/* main container */}
      <Grid container>
        <PageManager
          isLabOpen={isLabOpen}
          isRegistrationOpen={isRegistrationOpen}
          isFeaturesOpen={isFeaturesOpen}
        />
      </Grid>

      {/* sign in dialog */}
      <Dialog
        open={signInDialog}
        aria-labelledby="Sign-In"
        onClose={() => setSignDialog(false)}
      >
        <DialogTitle id="Sign-In">Sign In</DialogTitle>
        <DialogContent>
          <Stack
            spacing={3}
            component="form"
            minWidth={{ xs: "200px", sm: "400px" }}
            p={{ xs: "16px", sm: "32px" }}
            onSubmit={handleSubmit(logInHandler)}
            action="post"
          >
            <TextField
              error={authFail || Boolean(errors.email)}
              label="Email"
              type="email"
              {...register("email")}
              placeholder="testId: a@a.c"
              variant="standard"
              helperText={Boolean(errors.email)?errors.email.message:null}
            ></TextField>
            <TextField
              error={authFail || Boolean(errors.password)}
              label="Password"
              {...register("password")}
              type="password"
              variant="standard"
              placeholder="testPwd: aaaa"
              helperText={Boolean(errors.password)?errors.password.message:null}
            ></TextField>
            <Button variant="contained" type="submit">
              Log In
            </Button>

            {authFail ? (
              <FormHelperText error={authFail}>
                {" "}
                Credentials Invalid
              </FormHelperText>
            ) : null}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setSignDialog(false)}>
            NotNow
          </Button>
        </DialogActions>
      </Dialog>

      {/* toast on logged in success */}
      <Snackbar
        open={openToast}
        autoHideDuration={1500}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarAlert onClose={handleCloseToast} severity="success">
          {" "}
          Signed In Successfully
        </SnackbarAlert>
      </Snackbar>
    </LocalizationProvider>
  );
};

export default Main;
