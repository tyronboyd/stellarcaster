import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TourDates from './TourDates';

const styles = theme => ({
    tourDates: {
        backgroundColor: '#eeeeee',
    }
});


function RightColumn(props) {
    const { classes } = props;

    return (
        <Grid item xs={12} md={4}>
            <div className={classes.tourDates}>
                <Typography variant="h6" gutterBottom>
                    Tour Dates
                </Typography>
                <Divider/>
                <TourDates/>
            </div>
        </Grid>
    );
}

RightColumn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RightColumn);











