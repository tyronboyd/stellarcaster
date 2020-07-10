import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Nav from './Nav';

const styles = theme => ({
    layout: {
        margin: '0 auto',
    },
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    wrapper: {
        padding: 22
    },
});

function Header(props) {
    const { classes } = props;
    return (
        <Grid container spacing={24} justify={'center'} className={classes.wrapper}>
            <Grid container spacing={24} justify={'center'}>
                <Nav />
            </Grid>
            <Grid container spacing={24}>
                <Grid item md={12}>
                <Paper className={classes.mainFeaturedPost}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                Stellarcaster
                            </Typography>
                            <Typography component="h4" variant="h5" color="inherit" gutterBottom>
                                Members
                            </Typography>
                            <Typography variant="h6" color="inherit" paragraph>
                                Paul Bignell (vocals/rhythm guitar)	T Boyd (lead guitar/vocals)
                                James Bourne (bass)				Dave Campbell (drums)
                                With Chub Paizs (hammond)
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);