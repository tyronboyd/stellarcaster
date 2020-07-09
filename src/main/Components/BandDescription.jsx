import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        margin: 25,
        display: 'inline-block',
        padding: 10,
    },
    media: {
        height: 130,
        width: 150,
    },
    audioDescription: {
        margin: 25,
        display: 'inline-block',
        padding: 10,
    }
};

function BandDescription(props) {
    const { classes } = props;
    return (
        <Card className={classes[props.classType]}>
            <CardActionArea>
                <CardContent>
                    <Typography variant={'subtitle1'}>
                        {props.bandDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

BandDescription.propTypes = {
    classes: PropTypes.object.isRequired,
    bandDescription: PropTypes.string.isRequired,
    classType: PropTypes.string.isRequired,
};

export default withStyles(styles)(BandDescription);