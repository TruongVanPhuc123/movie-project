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
import Movie from '../feautures/movie/Movie';
import TV from '../feautures/TV/TV';

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

function Navbar() {
  const [openGenres, setOpenGenres] = useState(false)
  const [openMovie, setOpenMovie] = useState(false)
  const [openTV, setOpenTV] = useState(false)

  const [focusHome, setFocusHome] = useState(true)
  const [focusGenres, setFocusGenres] = useState(false)
  const [focusMovie, setFocusMovie] = useState(false)
  const [focusTV, setFocusTV] = useState(false)

  const genresList = useSelector(state => state.genres?.genresList)
  const dispatch = useDispatch()

  const handleClick = (fill) => {
    if (fill === "genres") {
      setOpenGenres(!openGenres)

      setOpenMovie(false)
      setOpenTV(false)

      setFocusGenres(true)

      setFocusHome(false)
      setFocusMovie(false)
      setFocusTV(false)
      return dispatch(getGenresList())

    } else if (fill === 'movie') {
      setOpenMovie(!openMovie)

      setOpenGenres(false)
      setOpenTV(false)

      setFocusMovie(true)

      setFocusHome(false)
      setFocusGenres(false)
      setFocusTV(false)
    } else if (fill === "tv") {
      setOpenTV(!openTV)

      setOpenMovie(false)
      setOpenGenres(false)

      setFocusTV(true)

      setFocusMovie(false)
      setFocusHome(false)
      setFocusGenres(false)
    }
  }

  return (
    <div className='slide-bar'>
      <Stack spacing={3} >
        <CustomizedLink href={`/`} /*component={RouterLink}*/ underline='none' variant='subtitle1' className={focusHome ? 'focus' : ''}>
          <HomeIcon children="node" /> <div>Home</div>
        </CustomizedLink>
        <CustomizedLink /*component={RouterLink}*/ underline='none' variant='subtitle1' className={focusGenres ? 'focus' : ''}>
          <Stack onClick={() => handleClick('genres')} alignItems={"center"} >
            <ContentCutIcon /> Genres
          </Stack>
        </CustomizedLink>
        <CustomizedLink /*component={RouterLink}*/ underline='none' variant='subtitle1' className={focusMovie ? 'focus' : ''}>
          <Stack onClick={() => handleClick('movie')} alignItems={"center"}>
            <LocalFireDepartmentIcon /> Movie
          </Stack>
        </CustomizedLink>
        <CustomizedLink /*component={RouterLink}*/ underline='none' variant='subtitle1' className={focusTV ? 'focus' : ''}>
          <Stack onClick={() => handleClick('tv')} alignItems={"center"}>
            <LiveTvIcon /> TV Shows
          </Stack>
        </CustomizedLink>
      </Stack>
      <Genres openGenres={openGenres} genresList={genresList} setOpenGenres={setOpenGenres} setFocusGenres={setFocusGenres} />
      <Movie openMovie={openMovie} setOpenMovie={setOpenMovie} setFocusMovie={setFocusMovie} />
      <TV openTV={openTV} setOpenTV={setOpenTV} setFocusTV={setFocusTV} />
    </div>
  )
}

export default Navbar