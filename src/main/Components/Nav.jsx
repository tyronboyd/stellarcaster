import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

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
};

export default withStyles(styles)(Nav);