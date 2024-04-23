import React, { useEffect } from 'react'
import ListMovie from '../feautures/ListMovie'
import { useDispatch, useSelector } from "react-redux";
import { getMovieListNowPlaying, getMovieListPopular, getMovieListToprated, getMovieListUpcoming } from '../feautures/movie/MovieSlice';
import "../css/HomePage.css"
import Navbar from '../layout/Navbar';
import Banner from '../layout/Banner';
import { Stack } from '@mui/material';

function HomePage() {

    const nowPlaying = useSelector(state => state.movie.movieListNowPlaying)
    const popular = useSelector(state => state.movie.movieListPopular)
    const topRated = useSelector(state => state.movie.movieListToprated)
    const upcoming = useSelector(state => state.movie.movieListUpcoming)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovieListNowPlaying())
        dispatch(getMovieListPopular())
        dispatch(getMovieListToprated())
        dispatch(getMovieListUpcoming())
    }, [dispatch])

    return (
        <div className='container-main'>
            <div className='slide-bar'>
                <Navbar />
            </div>
            <div style={{ paddingBottom: "50px" }} className='container-movielist'>
                <Stack justifyContent={"center"} alignItems={"center"}>
                    <Banner movie={topRated} />
                    <ListMovie movies={nowPlaying} title="Now Playing" />
                    <ListMovie movies={popular} title="Popular" />
                    <ListMovie movies={topRated} title="Top Rated" />
                    <ListMovie movies={upcoming} title="Upcoming" />
                </Stack>
            </div>
        </div>
    )
}

export default HomePage