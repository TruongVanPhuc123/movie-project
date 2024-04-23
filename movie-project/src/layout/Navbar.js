import { Box, Link, Stack, ThemeProvider, createTheme, styled } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const CustomizedLink = styled(Link)`
  color: white;
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    color:  rgb(210 82 39);
  }

`;

function Navbar() {
  return (
    <Stack spacing={3} >
      <>
        <CustomizedLink to="/" component={RouterLink} underline='none' variant='subtitle1' >
          <HomeIcon children="node" /> <div>Home</div>
        </CustomizedLink>
        <CustomizedLink to="/" component={RouterLink} underline='none' variant='subtitle1' sx={{ color: "white" }}>
          <ContentCutIcon /> Genres
        </CustomizedLink>
        <CustomizedLink to="/" component={RouterLink} underline='none' variant='subtitle1' sx={{ color: "white" }}>
          <LocalFireDepartmentIcon /> Top Rated
        </CustomizedLink>
        <CustomizedLink to="/" component={RouterLink} underline='none' variant='subtitle1' sx={{ color: "white" }}>
          <LiveTvIcon /> Upcoming
        </CustomizedLink>
      </>
    </Stack>
  )
}

export default Navbar