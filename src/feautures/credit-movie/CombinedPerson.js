import React from 'react'
import CastMovie from '../CastMovie'
import CrewMovie from '../CrewMovie'
import { useNavigate } from 'react-router-dom'

function CombinedPerson({ combined }) {

    const navigate = useNavigate()

    const castPerson = combined.cast
    const newCastPerson = combined.cast

    const crewPerson = combined.crew
    const newCrewPerson = combined.crew



    const handlePerson = (id) => {
        navigate(`/detail/${id}`)
    }

    return (
        <div style={{ width: "100%" }}>
            {/* <div id="title-movie"> <span>Known For</span> </div>     */}
            <CastMovie castMovie={castPerson} newCast={newCastPerson} handlePerson={handlePerson} title='Movie' fill='person' />
            <CrewMovie crewMovie={crewPerson} newCrew={newCrewPerson} handlePerson={handlePerson} title='Crew Movie' fill='person' />
        </div>
    )
}

export default CombinedPerson