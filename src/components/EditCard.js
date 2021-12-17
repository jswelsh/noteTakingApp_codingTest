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
  notes,
  handleEdit,
  // setNotes,
  // setIsEditMode,
  // setIsAddNoteMode,
  noteBeingEditedIndex,
  note:{
    id,
    title,
    created,
    lastEdited,
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
    currentNotes.push({
      id: id,
      title: currentNoteTitle,
      created: created,
      lastEdited: new Date().toISOString().slice(0,10),
      content: currentNoteContent
    })
    
    setCurrentNoteContent("")
    setCurrentNoteTitle("")
    handleEdit(currentNotes)
  }
  return (
    // <Popper id={noteBeingEditedIndex} open={open} anchorEl={anchorEl} transition>
    //   {({ TransitionProps }) => (
    //     <Fade {...TransitionProps}>
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
              // subheader={'created'}
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
                <Button children='Submit' id="submitNoteEdit" variant="contained" sx={{width:"100%"}} onClick={buttonOnClickHandler} />
              </Box>
            </CardContent>
          </Card>
    //     </Fade>
    //   )}
    // </Popper>
  )
}
