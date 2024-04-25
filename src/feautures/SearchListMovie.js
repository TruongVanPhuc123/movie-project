import { Box, IconButton, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import MovieCard from './MovieCard'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const CustomizeIconButton = styled(IconButton)`
    color:white;
`

function SearchListMovie({ title, query, page, movies, handlePage }) {
    return (
        <Stack justifyContent={"center"} alignItems={"center"}>
            <Box className='container-main' style={{ width: "80%", paddingTop: "50px" }}>
                <Stack sx={{ width: "100%" }}>
                    <div id='title-movie'>
                        <Typography variant='h5'>
                            <span>{title}</span>
                        </Typography>
                        {query ? <Typography variant="subtitle2">Value Search: {query}</Typography> : <></>}
                        <Stack direction={"row"} alignItems={"center"} spacing={1}>
                            <CustomizeIconButton disabled={page === 1} onClick={() => handlePage(page - 1)}>
                                <ArrowBackIosNewIcon />
                            </CustomizeIconButton>
                            <Typography variant='h6'>{page}</Typography>
                            <CustomizeIconButton disabled={movies?.length === 0} onClick={() => handlePage(page + 1)}>
                                <ArrowForwardIosIcon />
                            </CustomizeIconButton>
                        </Stack>
                    </div>

                    <Stack sx={{ width: "100%" }} >
                        <Stack sx={{ paddingBottom: "50px", paddingTop: "50px", gap: "30px", transition: "1s ease" }} flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"} direction={"row"} >
                            {movies?.map((movie) =>
                                movie.poster_path !== null && (
                                    <MovieCard title={movie.title} img={movie.poster_path} movie={movie} />
                                ))}
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    )
}

export default SearchListMovie