import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { Stack } from '@mui/material'
import Detail from './detail-movie/Detail'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative, Parallax } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from './detail-movie/DetailSlice';

const theme = {
    backgroundImage: "radial-gradient(87% 50% at 50% -38%, rgba(255, 255, 255, .05) 77.5%, rgba(255, 255, 255, .016) 88.13%, rgba(255, 255, 255, 0) 100%), radial-gradient(97% 109% at 48% 0, rgba(0, 0, 0, .07) 0, rgba(0, 0, 0, .4) 100%)",
    padding: "50px",
    borderRadius: "15px",
    display: "flex",
    gap: "30px"
}

function ListMovie({ title, movies }) {
    const newMovie = movies

    let defaultIndex = 0;
    let secondIndex = 4

    const { detailId } = useSelector(state => state.detail)
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(getMovieDetail({ id }))
    }


    return (
        <>
            {title === "Search List" ?
                <div className='container-main' style={{ width: "100%", paddingTop: "50px" }}>
                    <div className='title-movie'>
                        <h2>
                            <span>{title}</span>
                        </h2>
                    </div>

                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Stack sx={{ paddingBottom: "50px", paddingTop: "50px", width: "80%", gap: "30px" }} flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"} direction={"row"} >
                            {movies.map((movie) =>
                                movie.poster_path !== null && (
                                    <MovieCard title={movie.title} img={movie.poster_path} />
                                ))}
                        </Stack>
                    </div>
                </div> :
                <div className='container-main' style={{ width: "80%" }}>
                    <div className='title-movie'>
                        <h2>
                            <span>{title}</span>
                        </h2>
                    </div>
                    <div style={{ paddingTop: "50px", width: "100%" }}>
                        <Swiper
                            speed={2000}
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {movies.map((movie, index) => (
                                index % 5 === 0 &&
                                <SwiperSlide style={{ display: "flex", gap: '30px', justifyContent: "center", alignItems: "center" }}>
                                    {newMovie.slice(defaultIndex += 4, secondIndex += 4).map(movie => (
                                        <div className='group-card'>
                                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} height={"350px"} width={"100%"} style={{ borderRadius: "10px" }} />
                                            <div className='detail'>
                                                <span className='name-movie'>{movie.title}</span>
                                                <span className='' onClick={() => handleClick(movie.id)}><Detail detailId={detailId} /></span>
                                            </div>
                                            <div className='drop'></div>
                                        </div>
                                    ))}
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div >
            }
        </>
    )
}

export default ListMovie