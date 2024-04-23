import { Stack } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative, Parallax } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Banner({ movie }) {
    console.log(movie)
    return (
        <>
            <div className='movie-banner'>
                <Swiper
                    speed={2000}
                    parallax={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation, Parallax]}
                    className="mySwiper"
                >
                    {movie.map(movie => (
                        <SwiperSlide>
                            <div className='group-img'>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                                <div className='drop'></div>
                            </div>
                            <div className='overview-group'>
                                <Stack direction={"row"} justifyContent={"space-around"}>
                                    <Stack spacing={3} sx={{ width: "50%", textAlign: "start" }} >
                                        <div className='name-movie'>{movie.title} <span>{movie.release_date.slice(0, 4)}</span></div>
                                        <div className='overview-movie'>{movie.overview}</div>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2} alignItems={"end"} >
                                        <Stack direction={"row"} spacing={2} alignItems={"center"} >
                                            <span className='trailer-button'>Play Trailer</span>
                                            <button className='movie-button'>Play Movie</button>
                                        </Stack>

                                    </Stack>
                                </Stack>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Banner