import { AudioPlayer } from 'mui-audio-player';
import React from 'react';
import '../Main.css';
import {withStyles} from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';


const styles = {
    audio: {
        padding: 15
    },
};

function Audio(props) {
    const { classes } = props;
    return (
            <div style={classes.audio}>
                <Grid container spacing={24} justify={'centre'}>
                    <AudioPlayer
                        src="https://s9.converto.io/download-file/zwXZbmwDyWGN7qkqvVPMcQm0pIajpwdE/file.mp3"
                        autoPlay={false}
                        rounded={true}
                        elevation={1}
                    />
                </Grid>
            </div>
        );
    }

Audio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Audio);
