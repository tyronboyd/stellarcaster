import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    }
});


function Footer(props) {
    const { classes } = props;
    return (
        <div className={classes.layout}>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Stellarcaster (c) 2019
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    <a
                        // target="_blank"
                        // component="button"
                        // variant="body2"
                        href='https://www.reverbnation.com/stellarcaster'> Reverb Nation
                    </a><br />
                    <a
                        // component="button"
                        // variant="body2"
                        href='https://www.facebook.com/Stellarcaster-125462951902/'> Facebook Page
                    </a>
                </Typography>
            </footer>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);