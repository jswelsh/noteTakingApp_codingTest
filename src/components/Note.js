import React, {useState} from 'react'
import {
  Edit as EditIcon,
  MoreVert as MoreVertIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Menu,
  MenuItem,
  Grid,
  IconButton,
} from '@mui/material';
export default function Note({
  note,
  setNoteBeingEditedIndex,
  setIsEditMode,
  index,
  handleDelete
}) {

  const [anchorElNoteMenu, setAnchorElNoteMenu] = useState(null);
  const openNoteMenu = Boolean(anchorElNoteMenu);
  const {title, created, content, lastEdited} = note

  const handleClose = () => setAnchorElNoteMenu(null);
  const handleClick = ({target:{id}, currentTarget}, index) => {
    if (id === "noteEditOrDelete") setAnchorElNoteMenu(currentTarget);
    else if (id === "delete") handleDelete(index);
    else if (id === "edit") {
      setNoteBeingEditedIndex(index)
      setIsEditMode(true);
    };
  }

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
          action={<>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            children={<MoreVertIcon id="noteEditOrDelete"/>}
          />
          <Menu
            anchorEl={anchorElNoteMenu}
            open={openNoteMenu}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem id="edit" button onClick={(event) => handleClick(event, index)} children={<><EditIcon />Edit</>} />
            <MenuItem id="delete" button onClick={(event) => handleClick(event, index)} children={<><DeleteIcon />Delete</>} />
          </Menu>
          </>
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
