import React from 'react'
import { Box, Stack } from "@mui/material"
import MainHeader from "./MainHeader"
import MainFooter from "./MainFooter"
import { Outlet } from "react-router-dom"
import Navbar from './Navbar'
import AlertMessage from '../components/AlertMessage'


function MainLayout() {
    return (
        <Stack sx={{ minHeight: "100vh", }} className='container'>
            <MainHeader />
            <AlertMessage />
            <Navbar />
            <Outlet />
            <Box sx={{ flexGrow: 1 }} />
            <MainFooter />
        </Stack>
    )
}

export default MainLayout