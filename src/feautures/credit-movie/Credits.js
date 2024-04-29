import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCreditMovie } from './CreditSlice'

import CastMovie from '../CastMovie';
import CrewMovie from '../CrewMovie';
import { useNavigate } from 'react-router-dom';


function Credits({ id }) {

    const { creditsList } = useSelector(state => state.credits)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cast = creditsList.cast
    const newCast = creditsList.cast

    const crew = creditsList.crew
    const newCrew = creditsList.crew

    console.log(crew)

    const handlePerson = (id) => {
        navigate(`/person/${id}`)
    }

    useEffect(() => {
        dispatch(getCreditMovie({ id }))
    }, [id, dispatch])

    return (
        <>
            <CastMovie castMovie={cast} newCast={newCast} title="Cast Movie" handlePerson={handlePerson} />
            <CrewMovie crewMovie={crew} newCrew={newCrew} title="Crew Movie" handlePerson={handlePerson} />
        </>
    )
}

export default Credits