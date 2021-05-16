import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';


function Footer() {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__left">
                    <img className="footer__albumPhoto" src="https://upload.wikimedia.org/wikipedia/tr/thumb/6/6f/R%C3%BCyalarda_Buru%C5%9Fmu%C5%9Fuz.jpg/800px-R%C3%BCyalarda_Buru%C5%9Fmu%C5%9Fuz.jpg" alt=""/>
                    <div className="footer__songInfo">
                        <h4>E Tabi</h4>
                        <p>Adamlar</p>
                    </div>
                </div>

                <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>
                </div>

                <div className="footer__right">
                    <Grid container spacing={2}>
                        <Grid item>
                            <PlaylistPlayIcon/>
                        </Grid>
                        <Grid item>
                            <VolumeDownIcon/>
                        </Grid>
                        <Grid item xs>
                            <Slider/>
                        </Grid>
                    </Grid>                    
                </div>
            </div>
        </div>
    )
}

export default Footer
