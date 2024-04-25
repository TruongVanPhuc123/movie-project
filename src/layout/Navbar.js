import { Box, Link, Stack, ThemeProvider, createTheme, styled } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Genres from '../feautures/genres-movie/Genres';

import { useDispatch, useSelector } from 'react-redux'
import { getGenresList } from '../feautures/genres-movie/GenresSlice'

const CustomizedLink = styled(Link)`
  color: white;
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;  

  :hover {
    color:  rgb(210 82 39);
  }

`;

function Navbar({ title }) {
  const [open, setOpen] = useState(false)

  const genresList = useSelector(state => state.genres?.genresList)
  const dispatch = useDispatch()

  const handleGenres = () => {
    setOpen(!open)
    dispatch(getGenresList())
  }

  return (
    <div className='slide-bar'>
      <Stack spacing={3} >
        <CustomizedLink href={`/`} /*component={RouterLink}*/ underline='none' variant='subtitle1' >
          <HomeIcon children="node" /> <div>Home</div>
        </CustomizedLink>
        <CustomizedLink /*component={RouterLink}*/ underline='none' variant='subtitle1' sx={{ color: "white" }}>
          <Stack onClick={handleGenres} alignItems={"center"} >
            <ContentCutIcon /> Genres
          </Stack>
        </CustomizedLink>
        <CustomizedLink href={`#`} /*component={RouterLink}*/ underline='none' variant='subtitle1' sx={{ color: "white" }}>
          <LocalFireDepartmentIcon /> Top Rated
        </CustomizedLink>
        <CustomizedLink href={`#`} /*component={RouterLink}*/ underline='none' variant='subtitle1' sx={{ color: "white" }}>
          <LiveTvIcon /> Upcoming
        </CustomizedLink>
      </Stack>
      <Genres open={open} genresList={genresList} setOpen={setOpen} />
    </div>
  )
}

export default Navbar