import { Avatar, Stack, styled } from '@mui/material';
import React, { useState } from 'react'
import useAuth from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const CustomizedAvatar = styled(Avatar)`
  color: white;
  transition: 0.5s ease;
  font-size: 20px;

  :hover {
    color:  rgb(210 82 39);
  }

`;

function AvatarGroup() {
    const { logout, user, email, password } = useAuth()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    console.log(user, email, password)


    return (
        <>
            <Stack direction={"row"} alignItems="center" spacing={1} sx={{ color: "white", fontWeight: 'bold', cursor: 'pointer' }}
                onClick={() => setOpen(!open)}>
                {/* <div>Account</div> */}
                <CustomizedAvatar />
            </Stack>
            <div className={`account ${open ? 'active' : 'inactive'}`} >
                <Stack spacing={2}>
                    <div className='props'>Hi <span>{user}</span></div>
                    <div className='props' onClick={() => navigate('/profile')}>My Profile</div>
                    <div onClick={logout} className='props' style={{ display: "flex", alignItems: 'center', justifyContent: 'center', gap: '10px' }}><LogoutIcon /> Logout</div>
                </Stack>
            </div>
        </>
    )
}

export default AvatarGroup