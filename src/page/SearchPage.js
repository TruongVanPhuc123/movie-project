import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getMovieListSearch } from '../feautures/search-movie/SearchSlice'
import ListMovie from '../feautures/ListMovie'
import Navbar from '../layout/Navbar'



function SearchPage() {

    const [page, setPage] = useState(1)

    const { searchList } = useSelector(state => state.search)
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()

    console.log(searchList)

    let query = searchParams.get("query")

    useEffect(() => {
        dispatch(getMovieListSearch({ query: query, page: page }))
    }, [query, page, dispatch])

    const handlePage = (newPage) => {
        setPage(newPage)
    }

    return (
        <ListMovie movies={searchList} title="Search List" page={page} handlePage={handlePage} query={query} render="NoSwiper" />
    )
}

export default SearchPage