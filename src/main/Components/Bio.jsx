import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import bio from '../../assets/bio_info';

const styles = theme => ({
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
        padding: 25,
    },
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
});


function Bio(props) {
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                Bio
            </Typography>
            <Divider />
            <Typography variant="subtitle1" align={'left'} paragraph gutterBottom>
                {bio.info}
            </Typography>
        </Grid>
    );
}

Bio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bio);











