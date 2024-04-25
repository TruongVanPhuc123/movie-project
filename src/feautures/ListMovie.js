import React from 'react'
import SearchListMovie from './SearchListMovie';
import SwiperListMovie from './SwiperListMovie';


function ListMovie({ title, movies, page, handlePage, query, render }) {

    return (
        <>
            {render === "NoSwiper" ?
                <SearchListMovie title={title} query={query} page={page} movies={movies} handlePage={handlePage} />
                :
                <SwiperListMovie title={title} movies={movies} />
            }
        </>
    )
}

export default ListMovie