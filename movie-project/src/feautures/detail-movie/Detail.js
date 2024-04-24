import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../../css/HomePage.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import GradeIcon from '@mui/icons-material/Grade';

import Trailer from '../trailer-movie/Trailer';

const style = {
    position: 'absolute',
    height: "100vh",
    width: '100%',
    background: 'rgba(255,255,255,0.1)',
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

export default function Detail({ detailId }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const genres = detailId.genres
    const date = detailId.release_date
    return (
        <>
            <div onClick={handleOpen}><PlayCircleFilledIcon fontSize='large' /></div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={style}>
                    <div className='back' onClick={handleClose}>
                        <p><KeyboardBackspaceIcon /></p>
                    </div>
                    <Box className='group-detail '>
                        <div className='img-group-detail'>
                            <img src={`https://image.tmdb.org/t/p/w500` + detailId.backdrop_path} />
                            <div className='drop-detail'></div>
                        </div>
                        <div className='bottom-detail'>
                            <div className='overview-group-detail'>
                                <div className='title-date-genres-overview-detail'>
                                    <div className='title-detail'><h3>{detailId.title} <span>{date}</span></h3></div>
                                    <div className='genres-detail'>
                                        <div className='genres-detail-child'>{genres?.map((genres) => <p>{genres.name + ","}</p>)}</div>
                                    </div>
                                    <div className='overview-detail'>{detailId.overview}</div>
                                </div>
                            </div>
                            <div>
                                <div className='text-right-detail'>
                                    <div className='id'>
                                        Movie ID: {detailId.id}
                                    </div>
                                    <div className='popularity'>
                                        Vote: {detailId.vote_average}
                                    </div>
                                    <div className='voteCount'>
                                        Vote Count: {detailId.vote_count}
                                    </div>
                                </div>
                                <div className='action-detail'>
                                    <span className='playTrailer'><Trailer trailerId={detailId.id} /></span>
                                    <button className='movie-button'>Play Movie</button>
                                </div>
                            </div>
                            <div className='rated-detail'>
                                <p className='vote-detail'> Popularity : {detailId.popularity}</p>
                                <p className='icon-detail'><GradeIcon fontSize='0.75rem' /></p>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}