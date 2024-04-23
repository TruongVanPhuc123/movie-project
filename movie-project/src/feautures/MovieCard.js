import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative, Parallax } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function MovieCard({ id, img, title }) {
    return (
        <div className='card-movie'>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />

        </div>
    )
}

export default MovieCard