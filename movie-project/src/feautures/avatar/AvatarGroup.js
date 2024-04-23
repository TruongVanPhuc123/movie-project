import { Avatar, IconButton, Menu, MenuItem, Stack, styled } from '@mui/material';
import React, { useState } from 'react'
import useAuth from '../../hook/useAuth';

const CustomizedAvatar = styled(Avatar)`
  color: white;
  transition: 0.5s ease;
  font-size: 20px;

  :hover {
    color:  rgb(210 82 39);
  }

`;

function AvatarGroup() {
    const { logout } = useAuth()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderMenu = (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <Stack alignItems="center">
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem onClick={() => logout()}>Logout</MenuItem>
            </Stack>
        </Menu>
    )
    return (
        <div>
            <IconButton onClick={handleClick}>
                {/* <CustomizedMenuIcon /> */}
                <CustomizedAvatar />
            </IconButton>
            {renderMenu}
        </div>
    )
}

export default AvatarGroup