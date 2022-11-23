import {
  Button,
  Paper,
  Stack,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
  Checkbox,
  Snackbar,
  Alert,
  AlertProps,
} from "@mui/material";
import React, { useState,forwardRef  } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "@mui/x-date-pickers";
import RegistrationSuccess from "./RegistrationSuccess";


const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props}></Alert>;
});


const GenderRadio = ({ field, error }) => {
  return (
    <FormControl error={Boolean(error)}>
      <FormLabel id="gender-group">Gender:</FormLabel>
      <RadioGroup {...field} row>
        <FormControlLabel control={<Radio></Radio>} label="Male" value="male" />
        <FormControlLabel
          control={<Radio></Radio>}
          label="Female"
          value="female"
        />
        <FormControlLabel
          control={<Radio></Radio>}
          label="Prefer Not to say"
          value="pnts"
        />
      </RadioGroup>
      {Boolean(error) ? <FormHelperText>{error.message}</FormHelperText> : null}
    </FormControl>
  );
};

const Registration = () => {
  // schema for form inputs
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().required("Email id is required for verification"),
    gender: yup.string(),
    dob: yup
      .date()
      .required()
      .typeError("Date of Birth is required")
      .max("11-23-2004", "Age must be over 18")
      .min("11-23-1962", "Age must be below 60"),
    // mm/dd/yyyy
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,8}$/,
        "Min 6 Characters Max 8 characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match")
      .required(),
    agree: yup.bool().isTrue("You must accept to proceed!"),
  });
  //default values
  const defaultValues = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
    agree: false,
  };
  //hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const [formStatus, setFormStatus] = useState(true);
  const [openToast, setOpenToast] = useState(false);
  //handlers
  const formHandler = (data) => {
    console.log(data);
    console.log(data.dob.toLocaleDateString());
    setFormStatus(false);
    setOpenToast(true);
  };
  const handleCloseToast = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToast(false);
  };
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="center"
      m="40px 0px 32px 0px"
    >
      {formStatus ? (
        <Paper
          sx={{ padding: { sm: "32px", xs: "16px" } }}
          elevation={10}
          m={2}
        >
          <Stack
            component="form"
            onSubmit={handleSubmit(formHandler)}
            spacing={2}
            maxWidth={{ xs: "350px", sm: "420px" }}
            id="main-form"
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              maxWidth="100%"
            >
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <TextField
                    sx={{ width: { xs: "100%", sm: "45%" } }}
                    {...field}
                    error={Boolean(errors.firstName)}
                    helperText={
                      errors.firstName ? errors.firstName.message : null
                    }
                    variant="standard"
                    label="First Name"
                  />
                )}
              ></Controller>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <TextField
                    sx={{ width: { xs: "100%", sm: "45%" } }}
                    {...field}
                    variant="standard"
                    label="Last Name"
                    error={Boolean(errors.lastName)}
                    helperText={
                      errors.lastName ? errors.lastName.message : null
                    }
                  />
                )}
              ></Controller>
            </Stack>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Email"
                  {...field}
                  error={Boolean(errors.email)}
                  helperText={errors.email ? errors.email.message : null}
                ></TextField>
              )}
            ></Controller>
            <Stack>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <GenderRadio field={field} error={errors.gender} />
                )}
              ></Controller>
            </Stack>
            <Stack>
              <Controller
                name="dob"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    label="Date of Birth"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={Boolean(errors.dob)}
                        helperText={
                          Boolean(errors.dob) ? errors.dob.message : null
                        }
                      />
                    )}
                    {...field}
                  ></DatePicker>
                )}
              ></Controller>
            </Stack>

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  placeholder="use a strong password that you remember"
                  type="password"
                  error={Boolean(errors.password)}
                  helperText={
                    Boolean(errors.password) ? errors.password.message : null
                  }
                />
              )}
            ></Controller>

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Confirm Password"
                  placeholder="did you remember?"
                  type="password"
                  error={Boolean(errors.confirmPassword)}
                  helperText={
                    Boolean(errors.confirmPassword)
                      ? errors.confirmPassword.message
                      : null
                  }
                />
              )}
            ></Controller>
            <Controller
              name="agree"
              control={control}
              render={({ field }) => (
                <FormControl error={Boolean(errors.agree)}>
                  <FormControlLabel
                    label="I accept the terms"
                    control={<Checkbox {...field}></Checkbox>}
                  ></FormControlLabel>
                  <FormHelperText>
                    {Boolean(errors.agree) ? errors.agree.message : null}
                  </FormHelperText>
                </FormControl>
              )}
            ></Controller>
            <Button variant="contained" type="submit">
              Submit{" "}
            </Button>
          </Stack>
        </Paper>
      ) : (
        <RegistrationSuccess />
      )}
      {/* toast on registration success */}
      <Snackbar
        open={openToast}
        autoHideDuration={4000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <SnackbarAlert onClose={handleCloseToast} severity="success">
          {" "}
          Registered Successfully
        </SnackbarAlert>
      </Snackbar>
    </Stack>
  );
};

export default Registration;
