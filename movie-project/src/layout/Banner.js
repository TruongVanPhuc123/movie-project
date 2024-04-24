import { Stack } from '@mui/material'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative, Parallax } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Trailer from '../feautures/trailer-movie/Trailer';
import { useDispatch, useSelector } from 'react-redux'
import { getIdTrailer } from '../feautures/trailer-movie/TrailerSlice';
import GradeIcon from '@mui/icons-material/Grade';

function Banner({ movie }) {
    const trailerId = useSelector(state => state.trailer.trailerId)
    const dispatch = useDispatch()

    const getId = (id) => {
        dispatch(getIdTrailer({ id }))
    }

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
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            origin: 'left center',
                            translate: ['-5%', 0, -200],
                            rotate: [0, 100, 0],
                        },
                        next: {
                            origin: 'right center',
                            translate: ['5%', 0, -200],
                            rotate: [0, -100, 0],
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                    className="mySwiper"
                >
                    {movie.map((movieRender, index) => (
                        <SwiperSlide key={index}>
                            <div className='group-img'>
                                <img src={`https://image.tmdb.org/t/p/w500/${movieRender.backdrop_path}`} alt='movie' />
                                <div className='drop'></div>
                            </div>
                            <div className='overview-group'>
                                <Stack direction={"row"} justifyContent={"space-around"}>
                                    <Stack spacing={3} sx={{ width: "50%", textAlign: "start" }} >
                                        <div className='name-movie'>{movieRender.title} <span>{movieRender.release_date.slice(0, 4)}</span></div>
                                        {/* <div className='overview-movie'>{movieRender.overview}</div> */}
                                        <div className='text-right-detail'>
                                            <div className='id'>
                                                Movie ID: {movieRender.id}
                                            </div>
                                            {/* <div className='popularity'>
                                                Popularity : {movieRender.popularity}
                                            </div> */}
                                            <div className='voteCount'>
                                                Vote Count: {movieRender.vote_count}
                                            </div>
                                        </div>
                                    </Stack>
                                    <Stack direction={"row"} spacing={2} alignItems={"end"} >
                                        <Stack direction={"row"} spacing={2} alignItems={"center"} >
                                            <span onClick={() => getId(movieRender.id)}><Trailer trailerId={trailerId} /></span>
                                            <button className='movie-button'>Play Movie</button>
                                        </Stack>

                                    </Stack>
                                </Stack>
                            </div>
                            <div className='rated-detail'>
                                <p className='vote-detail'>  Popularity : {movieRender.popularity}</p>
                                <p className='icon-detail'><GradeIcon fontSize='0.75rem' /></p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Banner