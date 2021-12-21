import React from 'react'
import {
  Grid,
  TextField,
  Button
} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';

export const AddNote = ({
  currentNoteTitle,
  currentNoteContent,
  buttonOnClickHandler,
  setCurrentNoteContent,
  setCurrentNoteTitle
}) => {
  const handleTextInput = ({target:{id,value}}) => {
    if (id === "contentInput") setCurrentNoteContent(value)
    if (id === "titleInput") setCurrentNoteTitle(value)
  }
  const gridWrapper = (Component) => <Grid item xs={12} children={Component} />
  return (
    <Grid container >
      {[
        <TextField
          id="titleInput"
          label="Title"
          value={currentNoteTitle}
          variant="standard"
          fullWidth
          onChange={handleTextInput}
        />,
        <TextareaAutosize
          id="contentInput"
          placeholder="Add Note Content"
          value={currentNoteContent}
          minRows={3}
          style={{ width: "100%"}}
          onChange={handleTextInput}
        />,
        <Button
          children='Submit'
          id="submitNote"
          variant="contained"
          fullWidth
          onClick={buttonOnClickHandler}
        />
      ].map(Component => gridWrapper(Component))}
    </Grid>
  )
}
