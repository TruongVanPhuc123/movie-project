import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMovieListNowPlaying, getMovieListPopular, getMovieListToprated, getMovieListUpcoming } from '../feautures/movie/MovieSlice';
import { useParams } from 'react-router-dom';
import ListMovie from '../feautures/ListMovie';
import Banner from '../layout/Banner';
import { Stack } from '@mui/material';

function MoviePage() {
    const params = useParams()
    const id = params.id

    const [page, setPage] = useState(1)

    const nowPlaying = useSelector(state => state.movie.movieListNowPlaying)
    const popular = useSelector(state => state.movie.movieListPopular)
    const topRated = useSelector(state => state.movie.movieListToprated)
    const upcoming = useSelector(state => state.movie.movieListUpcoming)

    const dispatch = useDispatch()

    useEffect(() => {
        if (id === "Now Playing") {
            dispatch(getMovieListNowPlaying({ page }))
        } else if (id === "Popular") {
            dispatch(getMovieListPopular({ page }))
        } else if (id === "Top Rated") {
            dispatch(getMovieListToprated({ page }))
        } else {
            dispatch(getMovieListUpcoming({ page }))
        }
    }, [id, dispatch, page])

    const handlePage = (newPage) => {
        setPage(newPage)
    }

    return (
        <Stack justifyContent={"center"} alignItems={"center"} sx={{ width: "100%" }}>
            <ListMovie movies={

                id === "Now Playing" ? nowPlaying :
                    id === "Popular" ? popular :
                        id === "Top Rated" ? topRated :
                            upcoming

            } title={id} render="NoSwiper" page={page} handlePage={handlePage} />
        </Stack>
    )

}

export default MoviePage