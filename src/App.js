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
          <Typography children="noteey" variant="h6" color="inherit" noWrap />
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
          <Typography children="Notes" component="h1" variant="h4" align="center" />
          <Divider />
          {true
                ? <Grid
                    item
                    box
                    xs={12}
                  >
                    <EditCard
                      notes={notes}
                      handleEdit={()=>console.log("TEST edit")}
                      noteBeingEditedIndex={1}
                      note={1}
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
                        value={'test title'}
                        variant="standard"
                        fullWidth
                        onChange={()=>console.log("TEST input title")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextareaAutosize
                        id="contentInput"
                        placeholder="Add Note Content"
                        value={'content'}
                        minRows={3}
                        style={{ width: "100%"}}
                        onChange={()=>console.log("TEST input content")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button children='Submit' id="submitNote" variant="contained" sx={{width:"100%"}} onClick={()=>console.log("TEST edit")} />
                    </Grid>
                  </Grid>
                : <Button children='Add New Note' id="addNote" variant="contained" sx={{width:"100%"}} onClick={()=>console.log("TEST delete")} />
                }
              </Grid>
                {notes.map((note, index) =>
                <Note
                  note={note}
                  setNoteBeingEditedIndex={()=>console.log("TEST")}
                  setIsEditMode={()=>console.log("TEST modal")}
                  handleDelete={()=>console.log("TEST delete")}
                  index={'1'}
                />)}
            </Grid>}
        </Paper>
      </Container>
    </>
  );
}

export default App;
