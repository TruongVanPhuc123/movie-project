import React, { useEffect, useState } from 'react'
import ListMovie from '../feautures/ListMovie'
import { useDispatch, useSelector } from "react-redux";
import { getMovieListNowPlaying, getMovieListPopular, getMovieListToprated, getMovieListUpcoming } from '../feautures/movie/MovieSlice';
import "../css/HomePage.css"
import Navbar from '../layout/Navbar';
import Banner from '../layout/Banner';
import { Stack } from '@mui/material';

function HomePage() {

    const [page] = useState(1)

    const nowPlaying = useSelector(state => state.movie.movieListNowPlaying)
    const popular = useSelector(state => state.movie.movieListPopular)
    const topRated = useSelector(state => state.movie.movieListToprated)
    const upcoming = useSelector(state => state.movie.movieListUpcoming)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovieListNowPlaying({ page }))
        dispatch(getMovieListPopular({ page }))
        dispatch(getMovieListToprated({ page }))
        dispatch(getMovieListUpcoming({ page }))
    }, [dispatch, page])

    return (
        <Stack justifyContent={"center"} alignItems={"center"} sx={{ width: "100%" }}>
            <Banner movie={topRated} />
            <ListMovie movies={nowPlaying} title="Now Playing" />
            <ListMovie movies={popular} title="Popular" />
            <ListMovie movies={topRated} title="Top Rated" />
            <ListMovie movies={upcoming} title="Upcoming" />
        </Stack>
    )
}

export default HomePage