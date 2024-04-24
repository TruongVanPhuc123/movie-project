import { Stack } from '@mui/material'
import React from 'react'


function MovieCard({ movie, img, title }) {
    return (
        <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
        </div>
    )
}

export default MovieCard