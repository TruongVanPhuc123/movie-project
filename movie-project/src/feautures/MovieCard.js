import React from 'react'

function MovieCard({ id, img, title }) {
    return (
        <div className='card-movie'>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
            {/* <p>{title}</p> */}
            {/* <Link to={`/detail/${id}`}> */}
            <div >
                {/* <DataDetail id={id} /> */}
            </div>
            {/* </Link> */}
        </div>
    )
}

export default MovieCard