import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../../css/HomePage.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

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

export default function Trailer({ trailerId }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

                </Box>
            </Modal>
        </>
    );
}