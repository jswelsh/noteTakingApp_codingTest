import {
  Button, Divider,
  Grid, Paper,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { AddNote } from './AddNote';
import { EditCard } from './EditCard';
import { Note } from './Note';

export const Notes = () => {

  const [notes, setNotes] = useState(() => {
    // getting stored notes
    const saved = localStorage.getItem("notesFromJswApp");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [noteBeingEditedIndex, setNoteBeingEditedIndex] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAddNoteMode, setIsAddNoteMode] = useState(false);
  const [currentNoteContent, setCurrentNoteContent] = useState('')
  const [currentNoteTitle, setCurrentNoteTitle] = useState('')

  const handleUpdatingNotes = (newNotes) => {
    localStorage.setItem("notes", JSON.stringify(newNotes))
    setNotes(newNotes)
  }
  const handleEdit = (currentNotes) => {
    handleUpdatingNotes(currentNotes)
    setIsEditMode(false)
    setIsAddNoteMode(false)
  }
  const handleDelete = (index) => {
    const newCurrentNotes = [...notes]
    newCurrentNotes.splice(index,1)
    handleUpdatingNotes(newCurrentNotes)
  }
  const buttonOnClickHandler = ({target:{id}}) => {
    if (id === 'addNote') {
      setIsAddNoteMode(true)
    } else if (id === 'submitNote') {
      const currentNotes = [...notes]
      currentNotes.unshift({
        id: dayjs(),
        title: currentNoteTitle,
        created: dayjs(),
        lastEdited: dayjs(),
        content: currentNoteContent
      })
      handleUpdatingNotes(currentNotes)
      setIsAddNoteMode(false)
      setCurrentNoteContent('')
      setCurrentNoteTitle('')
    }
  }

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
      <Typography children="Notes" component="h1" variant="h4" align="center" />
      <Divider />
      {isEditMode
        ? <EditCard
            notes={notes}
            handleEdit={handleEdit}
            noteBeingEditedIndex={noteBeingEditedIndex}
            note={notes[noteBeingEditedIndex]}
          />
        :
        <Grid container rowSpacing={1} columnSpacing={{ md: 3 }} >
          <Grid item xs={12} mb={3} mt={2}>
            {isAddNoteMode
            ? <AddNote
                currentNoteTitle={currentNoteTitle}
                currentNoteContent={currentNoteContent}
                buttonOnClickHandler={buttonOnClickHandler}
                setCurrentNoteContent={setCurrentNoteContent}
                setCurrentNoteTitle={setCurrentNoteTitle}
              />
            : <Button
                children='Add New Note'
                id="addNote"
                variant="contained"
                fullWidth
                onClick={buttonOnClickHandler}
              />
            }
          </Grid>
            {notes.map((note, index) =>
            <Note
              note={note}
              setNoteBeingEditedIndex={setNoteBeingEditedIndex}
              setIsEditMode={setIsEditMode}
              handleDelete={handleDelete}
              index={index}
            />)}
        </Grid>}
    </Paper>
  )
}
