import React from 'react'
import Box from "@mui/material/Box"
import LogoImage from "../favicon.ico"
import { Link } from "react-router-dom"

function Logo({ disabled = false, sx }) {
    const logo = (
        <Box sx={{ width: 40, height: 40, ...sx }}>
            <img src={LogoImage} alt='Logo' width='100%' />
        </Box>
    )

    if (disabled) {
        return <>{logo}</>
    }
    return <Link to="/">{logo}</Link>
}

export default Logo