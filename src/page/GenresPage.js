import React, { useEffect, useState } from 'react'
import ListMovie from '../feautures/ListMovie'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getGenresList, getGenresMovieList } from '../feautures/genres-movie/GenresSlice'

function GenresPage() {
    const params = useParams()
    let id = Number(params.id)

    const { genresMovieList } = useSelector(state => state.genres)
    const { genresList } = useSelector(state => state.genres)

    const name = genresList?.find(genres => genres.id === Number(id))

    const [page, setPage] = useState(1)
    const handlePage = (newPage) => {
        setPage(newPage)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenresMovieList({ id, page: page }))
        dispatch(getGenresList())
    }, [id, page, dispatch])


    return (
        <ListMovie title={`Genres ${name?.name}`} movies={genresMovieList} page={page} handlePage={handlePage} render="NoSwiper" />
    )
}

export default GenresPage