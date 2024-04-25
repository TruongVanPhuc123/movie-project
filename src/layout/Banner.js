import { Stack } from '@mui/material'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative, Parallax } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Trailer from '../feautures/trailer-movie/Trailer';
import { useDispatch, useSelector } from 'react-redux'
import GradeIcon from '@mui/icons-material/Grade';
import { getMovieDetail } from '../feautures/detail-movie/DetailSlice';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

function Banner({ movie }) {
    const { detailId } = useSelector(state => state.detail)
    console.log(detailId)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getId = (id) => {
        dispatch(getMovieDetail({ id }))
        navigate(`/detail/${id}`)
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

                                    </Stack>
                                    <Stack direction={"row"} spacing={2} alignItems={"end"} >
                                        <Stack direction={"row"} spacing={2} alignItems={"center"} >
                                            <span className='' onClick={() => getId(movieRender.id)}>Detail Movie</span>
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