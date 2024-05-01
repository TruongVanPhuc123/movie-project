import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTVAiringToday, getTVOnTheAir, getTVPopular, getTVToprated } from '../feautures/TV/TVSlice'
import { Stack } from '@mui/material'
import ListMovie from '../feautures/ListMovie'

function TVPage() {

    const params = useParams()
    const id = params.id

    const [page, setPage] = useState(1)

    const airing = useSelector(state => state.tv.tvAiringToday)
    console.log(airing)
    const air = useSelector(state => state.tv.tvOnTheAir)
    const popular = useSelector(state => state.tv.tvPopular)
    const toprated = useSelector(state => state.tv.tvToprated)

    const dispatch = useDispatch()

    useEffect(() => {
        if (id === "Airing Today") {
            dispatch(getTVAiringToday({ page }))
        } else if (id === "On The Air") {
            dispatch(getTVOnTheAir({ page }))
        } else if (id === "Popular") {
            dispatch(getTVPopular({ page }))
        } else {
            dispatch(getTVToprated({ page }))
        }
    }, [id, dispatch, page])


    const handlePage = (newPage) => {
        setPage(newPage)
    }

    return (
        <Stack justifyContent={"center"} alignItems={"center"} sx={{ width: "100%" }}>
            <ListMovie movies={

                id === "Airing Today" ? airing :
                    id === "On The Air" ? air :
                        id === "Popular" ? popular :
                            toprated

            } title={id} render="NoSwiper" page={page} handlePage={handlePage} fill='TV' />
        </Stack>
    )
}

export default TVPage