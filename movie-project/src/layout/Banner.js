import { Stack } from '@mui/material'
import React from 'react'

function Banner({ overview, name }) {
    return (
        <div className='movie-banner'>
            <img src='https://image.tmdb.org/t/p/w500/uv2twFGMk2qBdyJBJAVcrpRtSa9.jpg' />
            <div className='overview-group'>
                <Stack direction={"row"} justifyContent={"space-around"}>
                    <Stack spacing={3} sx={{ width: "50%", textAlign: "start" }} >
                        <div className='name-movie'>Godzilla x Kong: The New Empire <span>2004</span></div>
                        <div className='overview-movie'>Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.</div>
                    </Stack>
                    <Stack direction={"row"} spacing={2} alignItems={"end"} >
                        <Stack direction={"row"} spacing={2} alignItems={"center"} >
                            <span className='trailer-button'>Play Trailer</span>
                            <button className='movie-button'>Play Movie</button>
                        </Stack>

                    </Stack>
                </Stack>
            </div>
        </div>
    )
}

export default Banner