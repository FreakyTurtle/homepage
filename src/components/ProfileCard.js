import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ExperienceStepper from './ExperienceStepper';
import SkillsChips from './SkillsChips.js';

export default class ProfileCard extends React.Component {
    
    constructor(props) {
        super(props);
        this.style = {
            fontFamily: 'Lobster, cursive',
            fontSize: 22
        };
    }
    
    render() {
        return(
            <Paper
            zDepth={3}
            >
                <Card className="card">
                    <CardHeader
                        title="Web Development"
                        titleColor="#49004e"
                        titleStyle={this.style}
                    />
                    <CardMedia
                        overlay={
                            <CardHeader 
                            title="Skills" 
                            subtitle="James Guest" 
                            avatar="images/profile3.png"
                            titleColor="#49004e"
                            titleStyle={this.style}
                            />
                        }
                        
                    >
                        <img src="images/webdev2.jpg" alt="Freaky Turtle Web Development"/>
                    </CardMedia>
                    <CardTitle title="Skills" />
                    <CardText
                        children={
                            <SkillsChips />
                        }
                     />
                </Card>
                </Paper>
        );
    }
}
