import {
  Box,
  Card, CardContent, CardHeader, Grid, Typography
} from '@mui/material';
import React from 'react';
import { CustomMarkdownConverter } from './CustomMarkdownConverter';
import NoteActionButton from './NoteActionButton';
import dayjs from 'dayjs';
import {dateFormat} from '../common/constants'

export const Note = ({
  note,
  setNoteBeingEditedIndex,
  setIsEditMode,
  index,
  handleDelete
}) => {
  
  const {title, created, content, lastEdited} = note

  const getTitle = (title) => title?.length > 12 ? title.substring(0, 12) + '...': title
  const getDate = (date) => dayjs(date).format(dateFormat)

  const formattedCreatedDate = 'Created: ' + getDate(created)
  const formattedLastEditedDate = 'Last Edited: ' + getDate(lastEdited)

  return (
    <Grid
      item
      box
      xs={12}
      md={6}
    >
      <Card >
        <CardHeader
          title={getTitle(title)}
          titleTypographyProps={{ align: 'center' }}
          subheader={
          <>
            <Typography children={formattedCreatedDate}/>
            <Typography children={formattedLastEditedDate}/>
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
          }}>
            <CustomMarkdownConverter children={content} />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}
