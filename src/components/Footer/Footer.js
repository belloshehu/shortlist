import React from 'react'
import {Grid, Typography} from "@mui/material"
import './Footer.css'
import  {FaFacebook, FaTwitter, FaGoogle, FaMapMarker, FaPhone} from 'react-icons/fa'
import {StyledFooter, StyledSocial} from '../styled/Footer.styled';

function Footer() {
    return (
        <StyledFooter>
            <Grid>
                <h2>FriendlyShortlisted</h2>
                <p>Friendly shortlists for your canditates...</p>
                <p><FaPhone /> +2340870888808</p>
                <FaMapMarker />
                <span> No 1, pti road. Effurun</span>
            </Grid>
            <Grid>
                <ul>
                    <li>
                        About us
                    </li>
                    <li>
                        Career
                    </li>
                </ul>
            </Grid>
            <StyledSocial>
                <ul>
                    <li>
                        <a href="https:www.facebook.com"><FaFacebook /></a>
                    </li>
                    <li>
                        <a href="https:www.twitter.com"><FaTwitter /></a>
                    </li>
                    <li>
                        <a href="https:www.google.com"><FaGoogle /></a>
                    </li>
                </ul>
            </StyledSocial>
        </StyledFooter>
    )
}

export default Footer
