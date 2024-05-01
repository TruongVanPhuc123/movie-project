import { Stack, Typography } from '@mui/material'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function CastMoviePerson({ title, castMovie, newCast, defaultIndex, secondIndex, handlePerson }) {
    return (
        <>
            {castMovie?.length !== 0 && (
                <Stack sx={{ width: "100%" }}>
                    <div id='title-movie'>
                        <Typography variant='h5'>
                            <span>{title}</span>
                        </Typography>
                    </div>
                    <Stack style={{ width: "100%", paddingTop: "20px" }}>
                        <Swiper>
                            <Stack direction={"row"} spacing={10} alignItems={"center"} style={{ width: "100%", height: "auto" }}></Stack>
                            {castMovie?.map(cast => (
                                cast.profile_path !== null &&
                                (
                                    <SwiperSlide>
                                        <Stack direction={"row"} spacing={3} alignItems={"center"} justifyContent={"center"}>
                                            {newCast?.slice(defaultIndex, secondIndex).map(cast => (
                                                cast.backdrop_path !== null && (
                                                    <div style={{ cursor: "pointer" }} onClick={() => handlePerson(cast.id)}>
                                                        <img src={`https://image.tmdb.org/t/p/w500${cast.backdrop_path}`} alt={cast.original_name} width={"100%"} height={"auto"} />
                                                        <Typography variant="subtitle1">
                                                            <span> {cast.title} </span>
                                                        </Typography>
                                                    </div>
                                                )
                                            ))}
                                        </Stack>
                                    </SwiperSlide>
                                )
                            ))}
                        </Swiper>
                    </Stack>
                </Stack>
            )}
        </>
    )
}

export default CastMoviePerson