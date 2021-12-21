import React from 'react'
import {
  Grid,
  TextField,
  Button
} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {addNote} from '../common/constants'

export const AddNote = ({
  currentNoteTitle,
  currentNoteContent,
  buttonOnClickHandler,
  setCurrentNoteContent,
  setCurrentNoteTitle
}) => {

  const {title, content, submitButton} = addNote; 
  const handleTextInput = ({target:{id,value}}) => {
    if (id === content.id) setCurrentNoteContent(value)
    if (id === title.id) setCurrentNoteTitle(value)
  }
  const gridWrapper = (Component) => <Grid item xs={12} children={Component} />
  return (
    <Grid container >
      {[
        <TextField
          data-cy={title.id}
          id={title.id}
          label={title.value}
          value={currentNoteTitle}
          variant="standard"
          fullWidth
          onChange={handleTextInput}
        />,
        <TextareaAutosize
          data-cy={content.id}
          id={content.id}
          placeholder={content.value}
          value={currentNoteContent}
          minRows={3}
          style={{ width: "100%"}}
          onChange={handleTextInput}
        />,
        <Button
          data-cy={submitButton.id}
          children={submitButton.value}
          id={submitButton.id}
          variant="contained"
          fullWidth
          onClick={buttonOnClickHandler}
        />
      ].map(Component => gridWrapper(Component))}
    </Grid>
  )
}
