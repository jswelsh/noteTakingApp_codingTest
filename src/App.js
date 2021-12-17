import React, {useState, useEffect} from 'react';
import {
  AppBar,
  TextareaAutosize,
  Button,
  CssBaseline,
  Grid,
  TextField,
} from '@mui/material';
import Note from './components/Note'
import { EditCard } from './components/EditCard';
function App() {
  return (
    <>
        <Grid item xs={12}>
          <TextField
            id="titleInput"
            label="Title"
            value={'currentNoteTitle'}
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            id="contentInput"
            placeholder="Add Note Content"
            value={'currentNoteContent'}
            minRows={3}
            style={{ width: "100%"}}
          />
        </Grid>
        <Grid item xs={12}>
          <Button children='Submit' id="submitNote" variant="contained" sx={{width:"100%"}} />
        </Grid>
        <Grid item xs={12}>
        <Note
          note={{title: 'test title', content: 'test content'}}
        />
        <EditCard
          title="more test title"
          content="testing content"
        />
        </Grid>
    </>
  );
}

export default App;
