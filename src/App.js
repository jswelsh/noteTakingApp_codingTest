
import React, {useState, useEffect} from 'react';

import {
  AppBar,
  Button,
  CssBaseline,
  Container,
  Toolbar,
  Paper,
  Typography,
  Divider,
  Grid,
  TextField,
} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {EditCard} from './components/EditCard';
import Note from './components/Note';

/* const initialState = [{
    id: 1,
    title: 'Do Laundry',
    created: new Date().toISOString().slice(5,10),
    lastEdited: new Date().toISOString().slice(5,10),
    content: 'remember to sort the whites and darks'
  },{
    id: 2,
    title: 'Do Dishes',
    created: new Date().toISOString().slice(5,10),
    lastEdited: new Date().toISOString().slice(5,10),
    content: 'remember to put wine glasses on the top rack'
  },{
    id: 3,
    title: 'Mow the Lawn',
    created: new Date().toISOString().slice(5,10),
    lastEdited: new Date().toISOString().slice(5,10),
    content: 'do this when the weather is nice'
  }
] */
function App() {

  const [notes, setNotes] = useState([]);
  const [noteBeingEditedIndex, setNoteBeingEditedIndex] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAddNoteMode, setIsAddNoteMode] = useState(false);
  const [currentNoteContent, setCurrentNoteContent] = useState(null)
  const [currentNoteTitle, setCurrentNoteTitle] = useState(null)

  const handleEdit = (currentNotes) => {
    setNotes(currentNotes)
    setIsEditMode(false)
    setIsAddNoteMode(false)
  }
  const handleDelete = (index) => {
    const newCurrentNotes = [...notes]
    newCurrentNotes.splice(index,1)
    setNotes(newCurrentNotes)
  }
  const buttonOnClickHandler = ({target:{id}}) => {
    if (id === 'addNote') {
      setIsAddNoteMode(true)
    } else if (id === 'submitNote') {
      const currentNotes = [...notes]
      currentNotes.push({
        id: Date.now(),
        title: currentNoteTitle,
        created: new Date().toISOString().slice(5,10),
        lastEdited: new Date().toISOString().slice(5,10),
        content: currentNoteContent
      })
      setNotes(currentNotes)
      setIsAddNoteMode(false)
      setCurrentNoteContent(null)
      setCurrentNoteTitle(null)
    }
  }
  const handleTextInput = ({target:{id,value}}) => {
    if (id === "contentInput") setCurrentNoteContent(value)
    if (id === "titleInput") setCurrentNoteTitle(value)
  }
  console.log(notes);
  console.log(isEditMode);
  return (
    <>
      <CssBaseline />
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
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
          <Typography children="Notes" component="h1" variant="h4" align="center" />
          <Divider />
          {isEditMode
            ? <Grid
                item
                box
                xs={12}
              >
                <EditCard
                  notes={notes}
                  handleEdit={handleEdit}
                  noteBeingEditedIndex={noteBeingEditedIndex}
                  note={notes[noteBeingEditedIndex]}
                />
              </Grid>
            :
            <Grid container rowSpacing={1} columnSpacing={{ md: 3 }} >
              <Grid item xs={12} mb={3} mt={2}>
                {isAddNoteMode
                ? <Grid container >
                    <Grid item xs={12}>
                      <TextField
                        id="titleInput"
                        label="Title"
                        value={currentNoteTitle}
                        variant="standard"
                        fullWidth
                        onChange={handleTextInput}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextareaAutosize
                        id="contentInput"
                        placeholder="Add Note Content"
                        value={currentNoteContent}
                        minRows={3}
                        style={{ width: "100%"}}
                        onChange={handleTextInput}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button children='Submit' id="submitNote" variant="contained" sx={{width:"100%"}} onClick={buttonOnClickHandler} />
                    </Grid>
                  </Grid>
                : <Button children='Add New Note' id="addNote" variant="contained" sx={{width:"100%"}} onClick={buttonOnClickHandler} />
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
      </Container>
    </>
  )
}

export default App
