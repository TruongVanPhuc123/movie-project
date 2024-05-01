import React from 'react'
import SearchListMovie from './search-movie/SearchListMovie';
import SwiperListMovie from './search-movie/SwiperListMovie';


function ListMovie({ title, movies, page, handlePage, query, render, fill }) {

    return (
        <>
            {render === "NoSwiper" ?
                <SearchListMovie title={title} query={query} page={page} movies={movies} handlePage={handlePage} fill={fill} />
                :
                <SwiperListMovie title={title} movies={movies} />
            }
        </>
    )
}

export default ListMovie