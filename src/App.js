import React from 'react'
import {
  Container, CssBaseline,
} from '@mui/material';
import {CustomAppBar} from './components/CustomAppBar';
import {Notes} from './components/Notes';


function App() {

  return (
    <>
      <CssBaseline />
      <CustomAppBar />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Notes />
      </Container>
    </>
  )
}

export default App
