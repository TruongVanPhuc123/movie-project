import React from 'react'
import "../css/layout_css/MainHeader.css"
import Logo from "../components/Logo"
import Navbar from './Navbar';
import AvatarGroup from '../feautures/avatar/AvatarGroup';
import SearchGroup from '../feautures/search-movie/SearchGroup';
import { Stack } from '@mui/material';

function MainHeader() {

    return (
        <div className='container-header'>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ width: "80%" }}>
                <div className='logo'>
                    <span>CoderSchool</span>
                </div>
                {/* <Navbar /> */}
                <Stack spacing={1} direction={"row  "}>
                    <SearchGroup />
                    <AvatarGroup />
                </Stack>
            </Stack>
        </div>
    )
}

export default MainHeader