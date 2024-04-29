import React, { useState } from 'react'
import "../css/layout_css/MainHeader.css"
import Logo from "../components/Logo"
import AvatarGroup from './AvatarGroup';
import SearchGroup from '../feautures/search-movie/SearchGroup';
import { IconButton, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function MainHeader() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    return (
        <div className='container-header'>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ width: "80%" }}>
                <div className='logo' onClick={() => navigate("/")}>
                    <span>CoderSchool</span>
                </div>
                {/* <Navbar /> */}
                <Stack spacing={2} direction={"row"} alignItems={"center"}>
                    <IconButton onClick={() => setOpen(!open)}>
                        <MenuIcon className='menuIcon' />
                    </IconButton>
                    <SearchGroup />
                    <AvatarGroup />
                </Stack>
            </Stack>
        </div>
    )
}

export default MainHeader