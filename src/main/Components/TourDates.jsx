import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DateRangeIcon from '@material-ui/icons/DateRange';
import tourDates from '../../assets/tour_info';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#eeeeee',
    },
});

function TourDates(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                {tourDates.map(date => (
                    <ListItem button>
                        <ListItemIcon>
                            <DateRangeIcon />
                        </ListItemIcon>
                        <ListItemText primary={date.tourInfo} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

TourDates.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TourDates);