import React, {useState} from 'react'
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';
export default function Note({
  note,
}) {
  const {title, created,} = note

  return (
    <Grid
      item
      box
      xs={12}
      md={6}
    >
      <Card >
        <CardHeader
          title={title}
          subheader={created}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{
            align: 'center',
          }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardContent>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            mb: 2,
          }}
          >
            <Typography children={'content'} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}
