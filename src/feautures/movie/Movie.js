import { Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const CustomizedTypography = styled(Typography)`
  color: white;
  transition: 0.5s ease;

  :hover {
    color:  rgb(210 82 39);
  }

`;

function Movie({ openMovie, setOpenMovie, setFocusMovie }) {
    const listMovies = ['Now Playing', 'Popular', 'Top Rated', 'Upcoming']
    const navigate = useNavigate()

    const handleClick = (name) => {
        setOpenMovie(!openMovie)
        setFocusMovie(!!true)
        navigate(`/movie/${name}`)
    }

    return (
        <div className={`movie ${openMovie ? 'active' : 'inactive'}`} >
            <Stack spacing={2} alignItems={"center"}>
                {listMovies.map(movie => (
                    <CustomizedTypography onClick={() => handleClick(movie)} variant="subtitle1">{movie}</CustomizedTypography>
                ))}
            </Stack>
        </div>
    )
}

export default Movie