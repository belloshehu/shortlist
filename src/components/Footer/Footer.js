import React from 'react'
import {Grid, Typography} from "@mui/material"

function Footer() {
    return (
        <React.Fragment>
            <Grid container id="foot">
                <Grid item sm={12} lg={4}></Grid>
                <Grid item sm={12} lg={4}></Grid>
                <Grid item sm={12} lg={4}></Grid>
                <Grid item sm={12} lg={4}></Grid>
                <Grid sm={12}>
                    <Typography>EasyShortList@copyright</Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Footer
