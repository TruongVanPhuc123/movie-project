import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../../css/HomePage.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { getIdTrailer } from '../trailer-movie/TrailerSlice';
import { useDispatch, useSelector } from 'react-redux'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { IconButton, styled } from '@mui/material';
import { useLocation } from 'react-router-dom';

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


const CustomizedIconButton = styled(IconButton)`
  color: white;
  transition: 0.5s ease;
  display:flex;
  gap: 10px;
  alignItems: center;

  :hover {
    color:  rgb(210 82 39);
  }

`;

export default function Trailer({ trailerId }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const key = useSelector(state => state.trailer.trailerId)
    const dispatch = useDispatch()

    const location = useLocation()
    console.log(location)


    React.useEffect(() => {
        dispatch(getIdTrailer({ id: trailerId }))
    }, [trailerId, dispatch])


    return (
        <>
            {key.length > 0 && (
                <div onClick={handleOpen}>
                    <CustomizedIconButton  >
                        <PlayCircleFilledIcon /> Play Trailer
                    </CustomizedIconButton>
                </div>
            )}
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
                    <iframe style={{ borderRadius: "3%" }} width="80%" height="600"
                        src={`https://www.youtube.com/embed/${key[0]?.key}?si=ArDlKge3MvYobk0L&autoplay=1`}
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </Box>
            </Modal>
        </>
    );
}