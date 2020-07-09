import React, { Component } from 'react';
import MediaCard from './Components/Card';
import './Main.css';
import Bio from './Components/Bio';
import Header from './Components/Header';
import Footer from './Components/Footer';
import bandInfo from '../assets/band_info';
import RightColumn from './Components/RightColumn';
import Grid from '@material-ui/core/Grid';

class Main extends Component {

    render() {
        return (
            <div className={'main'}>
                <Grid container spacing={24} justify={'centre'}>
                    <Header />
                </Grid>
                <Grid container spacing={24} justify={'centre'} className={'main-card-container'}>
                    {bandInfo.map(section => (
                        <MediaCard noWrap key={section.id} title={section.title} src={require('../assets' + section.src)} text={section.bodyText} />
                    ))}
                </Grid>
                <Grid container spacing={24} justify={'centre'}>
                    <Bio/>
                    <RightColumn />
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default Main;
