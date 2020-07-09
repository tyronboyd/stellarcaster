import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    media: {
        height: 80,
        width: 162
    },
});

const sections = [
    'Bio',
    'Albums',
    'Music',
    'Tour Dates',
    'Contact'
];

function Nav(props) {
    const { classes } = props;
    return (
        <Grid item xs={12} md={12}>
            <Toolbar className={classes.toolbarMain}>
                <CardMedia
                    className={classes.media}
                    image={require('../../assets/stellar_bg.jpg')}
                    title={props.title}
                />
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}>
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small">
                    Sign up
                </Button>
            </Toolbar>
            <Toolbar variant="dense" className={classes.toolbarSecondary}>
                {sections.map(section => (
                    <Typography color="inherit" noWrap key={section}>
                        {section}
                    </Typography>
                ))}
            </Toolbar>
        </Grid>
    );
}

Nav.propTypes = {
    classes: PropTypes.object.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Nav);