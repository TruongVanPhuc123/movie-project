import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import RecyclingIcon from '@mui/icons-material/Recycling';
import "../css/layout_css/MainFooter.css"
import { Container, IconButton, Link, Stack, styled } from '@mui/material';

const CustommizeLink = styled(Link)`
color:#fa6400;
`

function MainFooter() {
    return (
        <div className='container-footer'>
            <div className='icon'>

                <IconButton >
                    <CustommizeLink href="https://github.com/TruongVanPhuc123" >
                        <GitHubIcon style={{ fontSize: "2rem", cursor: 'pointer' }} />
                    </CustommizeLink>
                </IconButton>
                <IconButton >
                    <CustommizeLink href="https://www.facebook.com/profile.php?id=100052445172699" >
                        <FacebookIcon style={{ fontSize: "2rem", cursor: 'pointer' }} />
                    </CustommizeLink>
                </IconButton>
                <IconButton >
                    <CustommizeLink href="https://mail.google.com/" >
                        <EmailIcon style={{ fontSize: "2rem", cursor: 'pointer' }} />
                    </CustommizeLink>
                </IconButton>
                <IconButton >
                    <CustommizeLink href="#" >
                        <RecyclingIcon style={{ fontSize: "2rem", cursor: 'pointer' }} />
                    </CustommizeLink>
                </IconButton>
            </div>
            <div className='title'>
                <p>Truong Van Phuc - <span>Designer</span></p>
            </div>
            <Stack alignItems={"center"} spacing={1} direction={"row"} sx={{ fontSize: "1rem" }}>
                <img src="https://platform.coderschool.vn/v2/static/img/coderschool-logo-compact.svg" width="30" />
                <span>CoderSchool</span>
            </Stack>
        </div>
    )
}

export default MainFooter