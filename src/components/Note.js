import {
  Box,
  Card, CardContent, CardHeader, Grid, Typography
} from '@mui/material';
import React from 'react';
import NoteActionButton from './NoteActionButton';
export const Note = ({
  note,
  setNoteBeingEditedIndex,
  setIsEditMode,
  index,
  handleDelete
}) => {
  
  const {title, created, content, lastEdited} = note

  return (
    <Grid
      item
      box
      xs={12}
      md={6}
    >
      <Card >
        <CardHeader
          title={title.length > 15 ? title.substring(0, 15) + '...': title}
          titleTypographyProps={{ align: 'center' }}
          subheader={
          <>
            <Typography children={'Created: ' + created}/>
            <Typography children={'Last Edited: ' + lastEdited}/>
          </>}
          subheaderTypographyProps={{align: 'center'}}
          action={
            <NoteActionButton
              setNoteBeingEditedIndex={setNoteBeingEditedIndex}
              setIsEditMode={setIsEditMode}
              handleDelete={handleDelete}
              index={index}
            />
          }
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
            alignItems: 'baseline',
            mb: 2,
          }}
          >
            <Typography children={content} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}
