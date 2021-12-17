import {
  TextareaAutosize,
  TextField,
  Box,
  Card,
  CardHeader,
  CardContent,
  Button,
} from '@mui/material'
import React, {useState} from 'react'

export const EditCard = ({
  title,
  content
}) => {

  return (
    // <Popper id={noteBeingEditedIndex} open={open} anchorEl={anchorEl} transition>
    //   {({ TransitionProps }) => (
    //     <Fade {...TransitionProps}>
          <Card >
            <CardHeader
              title={<TextField
                id="titleInputEdit"
                label="Title"
                value={title}
                variant="standard"
                fullWidth
              />}
              titleTypographyProps={{ align: 'center' }}
            />
            <CardContent>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection:'column',
                alignItems: 'baseline',
                mb: 2,
              }}
              >
                <TextareaAutosize
                  id="contentInputEdit"
                  placeholder="Add Note Content"
                  value={content}
                  minRows={3}
                  style={{ width: "100%"}}
                />
                <Button children='Submit' id="submitNoteEdit" variant="contained" sx={{width:"100%"}} />
              </Box>
            </CardContent>
          </Card>
    //     </Fade>
    //   )}
    // </Popper>
  )
}
