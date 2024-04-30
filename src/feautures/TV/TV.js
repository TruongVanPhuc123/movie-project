import { Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CustomizedTypography = styled(Typography)`
  color: white;
  transition: 0.5s ease;

  :hover {
    color:  rgb(210 82 39);
  }

`;

function TV({ openTV, setOpenTV, setFocusTV }) {

    const listTV = ['Airing Today', 'On The Air', 'Popular', 'Top Rated']
    const navigate = useNavigate()

    const handleClick = (name) => {
        setOpenTV(!openTV)
        setFocusTV(!!true)
        navigate(`/tv/${name}`)
    }


    return (
        <div className={`tv ${openTV ? 'active' : 'inactive'}`} >
            <Stack spacing={2} alignItems={"center"}>
                {listTV.map(tv => (
                    <CustomizedTypography onClick={() => handleClick(tv)} variant="subtitle1">{tv}</CustomizedTypography>
                ))}
            </Stack>
        </div>
    )
}

export default TV