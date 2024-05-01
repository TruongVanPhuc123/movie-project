import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CrewMoviePerson from './credit-movie/CrewMoviePerson';

function CrewMovie({ crewMovie, newCrew, title, handlePerson, fill }) {

    let defaultIndex = 0;
    let secondIndex = 5

    return (
        <>
            {fill === 'person' ?
                <CrewMoviePerson crewMovie={crewMovie} newCrew={newCrew} title={title} handlePerson={handlePerson} defaultIndex={defaultIndex} secondIndex={secondIndex} />
                :
                <Stack sx={{ width: "80%" }}>
                    <div id='title-movie'>
                        <Typography variant='h5'>
                            <span>{title}</span>
                        </Typography>
                    </div>
                    <Stack style={{ width: "100%", paddingTop: "20px" }}>
                        <Swiper>
                            <Stack direction={"row"} spacing={10} alignItems={"center"} style={{ width: "100%", height: "auto" }}></Stack>
                            {crewMovie?.map(cast => (
                                cast.profile_path !== null &&
                                (
                                    <SwiperSlide>
                                        <Stack direction={"row"} spacing={3} alignItems={"center"} justifyContent={"center"}>
                                            {newCrew?.slice(defaultIndex, secondIndex).map(cast => (
                                                cast.profile_path !== null && (
                                                    <div style={{ cursor: "pointer" }} onClick={() => handlePerson(cast.id)}>
                                                        <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.original_name} width={"100%"} height={"300px"} />
                                                        <Typography variant="subtitle1">
                                                            <span> {cast.name} ({cast.known_for_department})</span>
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
            }
        </>
    )
}

export default CrewMovie