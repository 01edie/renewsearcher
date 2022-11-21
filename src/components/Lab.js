import {
  Stack,
  TextField,
  MenuItem,
  Box,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  CardHeader,
  Avatar,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios'
import React from "react";
import SearchIcon from "@mui/icons-material/YoutubeSearchedFor";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import currentData from '../data/Data'
import { red, pink, purple, blue, cyan, teal, orange,amber, brown, blueGrey, deepOrange } from '@mui/material/colors';


const Lab = () => {

  const colorArr = [red, pink, purple, blue, cyan, teal, orange, amber, brown, blueGrey, deepOrange];
  const schema = yup.object().shape({
    query: yup.string().required("You can't search blank!"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      query: "",
      timeValue: "3",
      filterValue: "everything",
    },
    resolver: yupResolver(schema),
  });

  const handleSearch = (data) => {
    console.log(data);
  };
 
  const randomColor = (val) =>{
    const tmp= colorArr[Math.floor(Math.random()*11)];
    return tmp[val];
  }

  const randomImage = () =>{
    const tmpArr= ['men','women'];
    return `https://randomuser.me/api/portraits/${tmpArr[Math.floor(Math.random()*2)]}/${Math.floor(Math.random()*100)}.jpg`
  }


  return (
    <Stack m="10px" sx={{ width: "100%" }}>
      <form onSubmit={handleSubmit(handleSearch)}>
        <Stack
          ml={6}
          spacing={{ xs: 3, sm: 2 }}
          id="functionalities-container"
          direction={{ xs: "column", sm: "row" }}
        >
          <Stack direction="row" spacing={2}>
            <Controller
              name="query"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="standard"
                  error={Boolean(errors.query)}
                  helperText={errors.query ? errors.query.message : null}
                  label="Search here!"
                />
              )}
            />

            <Box
              id="filterValue"
              width={{ xs: "150px", sm: "125px", md: "250px" }}
            >
              <Controller
                name="filterValue"
                control={control}
                render={({ field }) => (
                  <TextField
                    variant="standard"
                    select
                    label="Filter articles"
                    fullWidth
                    {...field}
                  >
                    <MenuItem value="everything">Everything</MenuItem>
                    <MenuItem value="top-headlines">Top Headlines</MenuItem>
                    <MenuItem value="sources">By Source</MenuItem>
                  </TextField>
                )}
              ></Controller>
            </Box>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Box
              id="timeValue"
              width={{ xs: "150px", sm: "125px", md: "250px" }}
            >
              <Controller
                name="timeValue"
                control={control}
                render={({ field }) => (
                  <TextField
                    variant="standard"
                    select
                    label="Time zone"
                    fullWidth
                    {...field}
                  >
                    <MenuItem value="3">Last 3 months</MenuItem>
                    <MenuItem value="6">Last 6 months</MenuItem>
                    <MenuItem value="01">Last 1 year</MenuItem>
                    <MenuItem value="00">All time</MenuItem>
                  </TextField>
                )}
              ></Controller>
            </Box>

            <IconButton
              type="submit"
              sx={{
                width: "56px",
                height: "56px",
                boxShadow: 2,
                "&:hover": {
                  bgcolor: "info.light",
                  color: "white",
                  boxShadow: 12,
                },
              }}
            >
              <SearchIcon color="inherit" sx={{ fontSize: "36px" }} />
            </IconButton>
          </Stack>
        </Stack>
      </form>

      <Grid item xs={12} my={3} id="lab-results">
        <Masonry
          columns={{ xs: 2, sm: 3, md: 4, xl: 5 }}
          spacing={{ xs: 1, sm: 2, md: 1 }}
        >
          {currentData.slice(0, 12).map((data, index) => {
            const imageUrl = `${data.urlToImage.split("?")[0]}?resize=250,150`;
            return (
              <Card
                sx={{
                  transition: "all 0.2s",
                  "&:hover": {
                    boxShadow: 16,
                    marginTop: "7.5px",
                  },
                }}
                key={index}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: randomColor(500) }} aria-label="recipe"
                    src={data.author?randomImage():null}
                    >
                      {data.author?data.author.slice(0,1):data.source.name.slice(0,1)}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={data.author?`${data.author}, ${data.source.name}`:data.source.name}
                  titleTypographyProps={{fontWeight:600}}
                  subheader={`${data.publishedAt.slice(11,16)}, ${data.publishedAt.slice(0,10)}`}
                  
                />
                <CardMedia
                  component="img"
                  height="150px"
                  image={imageUrl}
                  onError={(e) => (e.target.src = 'https://source.unsplash.com/random/250x150')}
                  alt="image loading failed"
                ></CardMedia>
                <CardContent sx={{ padding: "5px 10px" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{
                      fontSize: "1rem",
                      lineHeight: "1.2rem",
                      fontWeight: "600",
                    }}
                    component="div"
                  >
                    {data.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.description.slice(0, 120)}...
                  </Typography>
                </CardContent>
                <CardActions sx={{ paddingLeft: "10px", paddingBottom: "5px" }}>
                  <Button variant="outlined" href={data.url} target='_blank'>Learn More</Button>
                  <Button
                    sx={{
                      "&:hover": {
                        bgcolor: "success.light",
                        color: "white",
                        fontWeight: 600,
                      },
                    }}
                  >
                    Share
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Masonry>
      </Grid>
    </Stack>
  );
};


export default Lab;
