import { Grid } from '@mui/material'
import React from 'react'



const Main = () => {
  return (
    <>
    <Grid container sx={{marginTop:'10rem'}}>
    <Grid item sm={12} bgcolor='primary.light' sm={6}>1</Grid>
    <Grid item sm={12} bgcolor='success.light' sm={6}>2</Grid>
    </Grid>
    </>
  )
}

export default Main