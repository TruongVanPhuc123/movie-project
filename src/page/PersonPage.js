import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCombindedPerson, getPerson } from '../feautures/credit-movie/CreditSlice'
import CombinedPerson from '../feautures/credit-movie/CombinedPerson'

function PersonPage() {
    const params = useParams()
    let id = params.id

    const { person } = useSelector(state => state.credits)
    const { combined } = useSelector(state => state.credits)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPerson({ id }))
        dispatch(getCombindedPerson({ id }))
    }, [id, dispatch])


    return (
        <Stack sx={{ width: "100%", paddingTop: "100px" }} alignItems={"center"} justifyContent={"center"}>
            <Stack sx={{ width: "80%", height: "auto", position: "relative", zIndex: "90" }}>
                <Stack direction={"row"} spacing={3}>
                    <Box>
                        <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} width={"300px"} height={"350px"} style={{ borderRadius: "10px" }} />
                    </Box>
                    <Stack sx={{ width: "90%", textAlign: "start" }} spacing={3} justifyContent={"start"}>
                        <Box>
                            <Typography variant="h5">
                                <span>
                                    {person.name}
                                </span>
                            </Typography>
                            <Typography variant="subtitle1">{person.biography}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h5">
                                <span>
                                    Personal Info
                                </span>
                            </Typography>
                            <Stack direction={"row"} spacing={3} >
                                <Box>
                                    <Typography variant="subtitle2" color={"primary"}>
                                        Known For
                                    </Typography>
                                    <Typography>
                                        {person.known_for_department}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle2" color={"primary"}>
                                        Birthday
                                    </Typography>
                                    <Typography>
                                        {person.birthday}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle2" color={"primary"}>
                                        Place of Birth
                                    </Typography>
                                    <Typography>
                                        {person.place_of_birth}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>
                {/* <Box> */}
                <CombinedPerson combined={combined} />
                {/* </Box> */}
            </Stack>
        </Stack>
    )
}

export default PersonPage