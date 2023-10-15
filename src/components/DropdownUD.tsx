'use client'

import { useState } from 'react';
import DeleteConfirmation from './DeleteConfirmation';
import { SongEdit } from '@/app/(app)/song/components/SongEdit';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface DropdownUDProps {
  id: string;
}

export function DropdownUD({id}: DropdownUDProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
            <SongEdit id={id}/>
        </MenuItem>
        <MenuItem>           
            <DeleteConfirmation id={id} direction='song'>
              Excluir
            </DeleteConfirmation>
        </MenuItem>
      </Menu>
    </div>
  );
}