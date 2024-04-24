import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Stack, Typography, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../feautures/detail-movie/DetailSlice';
import Trailer from '../feautures/trailer-movie/Trailer';
import Navbar from '../layout/Navbar';

const CustomizedTypography = styled(Typography)`
    color: rgb(200 82 9) ;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
`


function DetailPage() {
    const params = useParams()
    const id = params.id

    const { detailId } = useSelector(state => state.detail)
    console.log(detailId)
    const genres = detailId.genres
    const date = detailId.release_date
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getMovieDetail({ id }))
    }, [id, dispatch])

    return (
        <>
            <div className='slide-bar'>
                <Navbar />
            </div>
            <Stack sx={{ width: "100%", marginTop: "100px", marginBottom: "50px" }} alignItems={"center"} spacing={3} justifyContent={"center"}>
                <Stack sx={{ width: "80%", position: "relative" }}>
                    <div className='group-img-detail'>
                        <img src={`https://image.tmdb.org/t/p/w500${detailId.backdrop_path}`} alt={detailId.title} height={"500px"} width={"100%"} style={{ borderRadius: "10px" }} />
                        <div className='drop'></div>
                        <div className='group-name-detail'>
                            <Typography sx={{ fontSize: "2rem" }} variant='subtitle2'>{detailId.title}</Typography>
                            <div className='genres-detail'>{genres?.map(genres => <div className='genres-name'>{genres.name} </div>)}</div>
                            <Trailer trailerId={id} />
                            <span>
                                <button className='movie-button'>Play Movie</button>
                            </span>
                        </div>
                    </div>
                </Stack>
                <Stack style={{ width: "80%", textAlign: "center" }} spacing={3}>
                    <CustomizedTypography variant='h5' > {detailId.title} <span>{date}</span></CustomizedTypography>
                    <Typography sx={{ width: "100%", textTransform: "capitalize" }} variant='subtitle1'>{detailId.overview}</Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default DetailPage