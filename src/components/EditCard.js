import {
  Box, Button, Card, CardContent, CardHeader, Grid, TextareaAutosize,
  TextField
} from '@mui/material'
import React, { useState } from 'react'
import dayjs from 'dayjs'
export const EditCard = ({
  notes,
  handleEdit,
  noteBeingEditedIndex,
  note:{
    id,
    title,
    created,
    content
  }
}) => {
  const [currentNoteTitle, setCurrentNoteTitle] = useState(title)
  const [currentNoteContent, setCurrentNoteContent] = useState(content)
  const handleTextInput = ({target:{id,value}}) => {
    if (id === "contentInputEdit") setCurrentNoteContent(value)
    if (id === "titleInputEdit") setCurrentNoteTitle(value)
  }
  const buttonOnClickHandler = () => {
    const currentNotes = [...notes]
    currentNotes.splice(noteBeingEditedIndex, 1)
    currentNotes.unshift({
      id: id,
      title: currentNoteTitle,
      created: created,
      lastEdited: dayjs(),
      content: currentNoteContent
    })
    
    setCurrentNoteContent("")
    setCurrentNoteTitle("")
    handleEdit(currentNotes)
  }
  return (
    <Grid
      item
      box
      xs={12}
    >    
      <Card >
        <CardHeader
          title={<TextField
            id="titleInputEdit"
            label="Title"
            value={currentNoteTitle}
            variant="standard"
            fullWidth
            onChange={handleTextInput}
          />}
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
            flexDirection:'column',
            alignItems: 'baseline',
            mb: 2,
          }}
          >
            <TextareaAutosize
              id="contentInputEdit"
              placeholder="Add Note Content"
              value={currentNoteContent}
              minRows={3}
              style={{ width: "100%"}}
              onChange={handleTextInput}
            />
            <Button
              children='Submit'
              id="submitNoteEdit"
              variant="contained"
              fullWidth
              onClick={buttonOnClickHandler}
            />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}
