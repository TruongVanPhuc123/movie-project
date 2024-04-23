import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { Stack } from '@mui/material'

const theme = {
    backgroundImage: "radial-gradient(87% 50% at 50% -38%, rgba(255, 255, 255, .05) 77.5%, rgba(255, 255, 255, .016) 88.13%, rgba(255, 255, 255, 0) 100%), radial-gradient(97% 109% at 48% 0, rgba(0, 0, 0, .07) 0, rgba(0, 0, 0, .4) 100%)",
    padding: "50px",
    borderRadius: "15px"
}

function ListMovie({ title, url, movies }) {
    const [page, setPage] = useState(1)

    return (
        <div className='container-main'>
            <div className='listMovie'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', paddingBottom: "30px" }}>
                    <div className='title-movie'>
                        <h2>
                            <span>{title}</span>
                        </h2>
                        {title === "Now Playing" && (
                            <Stack spacing={1} direction={'row'} alignItems={"center"}>
                                <button className='btn' disabled={page === 1} onClick={() => setPage(page - 1)}>-</button>
                                <div className='value-page'>{page}</div>
                                <button className='btn' disabled={movies.length === 0} onClick={() => setPage(page + 1)}>+</button>
                            </Stack>
                        )}
                    </div>
                </div>
                {/* <Stack style={{ width: "100%" }} justifyContent={"space-around"} alignItems={"center"}> */}
                <Stack direction={"row"} spacing={2} flexWrap={"wrap"} justifyContent={"center"} style={theme}>
                    {title === "Search List" ?
                        movies.map((movie) => (
                            movie.backdrop_path === null ? <></> :
                                <>
                                    <MovieCard id={movie.id} title={movie.title} img={movie.poster_path} />

                                </>
                        )) :
                        movies.slice(0, 4).map((movie) => (
                            movie.backdrop_path === null ? <></> :
                                <div >
                                    <MovieCard id={movie.id} title={movie.title} img={movie.poster_path} />

                                </div>
                        ))
                    }
                </Stack>
                {/* </Stack> */}
            </div>


        </div >
    )
}

export default ListMovie