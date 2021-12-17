import React from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';

export const CustomAppBar = () => {
  return (
    <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography children="Note App" variant="h6" color="inherit" noWrap />
        </Toolbar>
      </AppBar>
  )
}
