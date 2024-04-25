import { Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'

function BlankLayout() {
    return (
        <Stack sx={{ minHeight: "100vh" }} alignItems="center" justifyContent="center" >
            <Logo disabled sx={{ width: 70, height: 60, mb: 5 }} />
            <Outlet />
        </Stack>
    )
}

export default BlankLayout