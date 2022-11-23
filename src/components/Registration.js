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
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const GenderRadio = ({ field }) => {
  return (
    <FormControl>
      <FormLabel id="gender-group">Gender:</FormLabel>
      <RadioGroup name="gender-group" {...field} row>
        <FormControlLabel control={<Radio></Radio>} label="Male" value="male" />
        <FormControlLabel
          control={<Radio></Radio>}
          label="female"
          value="female"
        />
      </RadioGroup>
      <FormHelperText>Invalid selection</FormHelperText>
    </FormControl>
  );
};

const Registration = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    gender: yup.string().required(),
  });
  const defaultValues = {
    firstName: "",
    lastName: "",
    gender: "",
    email:""
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const formHandler = (data) => {
    console.log(data);
  };
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="center"
      m="40px 0px 32px 0px"
    >
      <Paper sx={{ padding: "32px" }} elevation={10}>
        <Stack
          component="form"
          onSubmit={handleSubmit(formHandler)}
          spacing={2}
        >
          <Stack direction="row" spacing={2}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
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
          <TextField label="Email" 
          error={Boolean(errors.email)}
          helperText={errors.email ? errors.email.message : null}
          ></TextField>
          <Stack>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => <GenderRadio field={field} />}
            ></Controller>
          </Stack>
          {/* <Stack>
            <Controller
              name='gender'
              control={control}
              render={() => (
                <TextField/>
              )}
            ></Controller>
          </Stack> */}
          <Button variant="contained" type="submit">
            Submit{" "}
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Registration;
