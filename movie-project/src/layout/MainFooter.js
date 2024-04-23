import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import RecyclingIcon from '@mui/icons-material/Recycling';
import "../css/layout_css/MainFooter.css"

function MainFooter() {
    return (
        <div className='container-footer'>
            <div className='icon'>
                <GitHubIcon style={{ fontSize: "2rem", cursor: 'pointer' }} />
                <FacebookIcon style={{ fontSize: "2rem", cursor: 'pointer' }} />
                <EmailIcon style={{ fontSize: "2rem", cursor: 'pointer' }} />
                <RecyclingIcon style={{ fontSize: "2rem", cursor: 'pointer' }} />
            </div>
            <div className='title'>
                <p>Truong Van Phuc - <span>Designer</span></p>
            </div>
            <div class="logoFooter">
                <img src="https://platform.coderschool.vn/v2/static/img/coderschool-logo-compact.svg" width="30" />
                <span>CoderSchool</span>
            </div>
        </div>
    )
}

export default MainFooter