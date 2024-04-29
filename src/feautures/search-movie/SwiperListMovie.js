import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { useDispatch } from 'react-redux';
import { getMovieDetail } from '../detail-movie/DetailSlice';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Stack, Typography } from '@mui/material';


const theme = {
    backgroundImage: "radial-gradient(87% 50% at 50% -38%, rgba(255, 255, 255, .05) 77.5%, rgba(255, 255, 255, .016) 88.13%, rgba(255, 255, 255, 0) 100%), radial-gradient(97% 109% at 48% 0, rgba(0, 0, 0, .07) 0, rgba(0, 0, 0, .4) 100%)",
    padding: "50px",
    borderRadius: "15px",
    display: "flex",
    gap: "30px"
}

function SwiperListMovie({ title, movies }) {

    const newMovie = movies

    let defaultIndex = 0;
    let secondIndex = 4
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (id) => {
        dispatch(getMovieDetail({ id }))
        navigate(`/detail/${id}`)
    }


    return (
        <Stack sx={{ width: "80%" }}>
            <div id='title-movie'>
                <Typography variant='h5'>
                    <span>{title}</span>
                </Typography>
            </div>
            <Box sx={{ paddingTop: "30px", paddingBottom: "30px", width: "100%" }}>
                <Swiper
                    speed={2000}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {movies?.map((movie, index) => (
                        index % 5 === 0 &&
                        <SwiperSlide style={{ display: "flex", gap: '30px', justifyContent: "center", alignItems: "center" }}>
                            {newMovie.slice(defaultIndex += 4, secondIndex += 4).map(movie => (
                                <Box sx={{ position: "relative" }}>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} height={"340px"} width={"100%"} style={{ borderRadius: "10px" }} />
                                    <div className='detail'>
                                        {/* <span className='name-movie'>{movie.title}</span> */}
                                        <span className='' onClick={() => handleClick(movie.id)}><InfoIcon className='info' /></span>
                                    </div>
                                    <div className='drop'></div>
                                </Box>
                            ))}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Stack >
    )
}

export default SwiperListMovie