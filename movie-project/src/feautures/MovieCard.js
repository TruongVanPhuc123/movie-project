import { Stack, Typography, styled } from '@mui/material'
import React from 'react'
import Trailer from './trailer-movie/Trailer'
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch } from 'react-redux';
import { getMovieDetail } from './detail-movie/DetailSlice';
import { useNavigate } from 'react-router-dom';


function MovieCard({ movie, img, title }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (id) => {
        dispatch(getMovieDetail({ id }))
        navigate(`/detail/${id}`)
    }
    return (
        <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
            <div className='drop'></div>
            <div className='detail'>
                <span className='name-movie'>{movie.title}</span>
                <span className='' onClick={() => handleClick(movie.id)}><InfoIcon /></span>
            </div>
        </div>

    )
}

export default MovieCard