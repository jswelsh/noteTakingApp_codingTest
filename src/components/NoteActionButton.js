import {
  Delete as DeleteIcon, Edit as EditIcon,
  MoreVert as MoreVertIcon
} from '@mui/icons-material';
import {
  IconButton, Menu,
  MenuItem
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { noteObj } from '../common/constants'


export default function NoteActionButton({
  index,
  setNoteBeingEditedIndex,
  setIsEditMode,
  handleDelete
}) {
  const [anchorElNoteMenu, setAnchorElNoteMenu] = useState(null);
  const openNoteMenu = Boolean(anchorElNoteMenu);

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
    <Box data-cy={noteObj.actionButton.id} >
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        children={
          <MoreVertIcon
            id={noteObj.actionButton.id}
            
          />
        }
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
        <MenuItem
          id={noteObj.editButton.id}
          data-cy={noteObj.editButton.id}
          button
          onClick={(event) => handleClick(event, index)}
          children={<><EditIcon />Edit</>}
        />
        <MenuItem
          id={noteObj.deleteButton.id}
          data-cy={noteObj.deleteButton.id}
          button
          onClick={(event) => handleClick(event, index)}
          children={<><DeleteIcon />Delete</>}
        />
      </Menu>
    </Box>
  )
}
