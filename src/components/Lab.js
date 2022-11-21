import { Stack, TextField } from '@mui/material'
import React from 'react'



const Lab = () => {
  return (
    <Stack m='10px'>
        <Stack ml={6} id='functionalities-container' direction='row'>
        <TextField label='Search here!'/>
        </Stack>
    </Stack>
  )
}

export default Lab