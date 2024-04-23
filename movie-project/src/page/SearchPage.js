import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getMovieListSearch } from '../feautures/search-movie/SearchSlice'
import ListMovie from '../feautures/ListMovie'



function SearchPage() {
    const { searchList } = useSelector(state => state.search)
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()

    let query = searchParams.get("query")

    useEffect(() => {
        dispatch(getMovieListSearch({ query: query }))
    }, [query])

    return (
        <div>
            <ListMovie movies={searchList} title="Search List" />
        </div>
    )
}

export default SearchPage