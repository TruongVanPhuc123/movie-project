import { Divider, Link, Stack, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const CustomizedLink = styled(Link)`
  color: white;
  transition: 0.5s ease;

  :hover {
    color:  rgb(210 82 39);
  }

`;

function Genres({ open, genresList, setOpen }) {
    const navigate = useNavigate()

    const handleGenresPage = (id) => {
        setOpen(!open)
        navigate(`/genres/${id}`)
    }

    return (
        <div className={`genres ${open ? 'active' : 'inactive'}`} >
            <Stack spacing={2} >
                {genresList?.map((genres) => (
                    <>
                        <div onClick={() => handleGenresPage(genres.id)}>
                            <CustomizedLink underline='none'>
                                {genres.name}
                            </CustomizedLink>
                        </div>
                        <Divider />
                    </>
                ))}
            </Stack>
        </div>
    )
}

export default Genres