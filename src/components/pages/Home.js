import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

export default class Home extends React.Component {
    
    constructor(props) {
      super(props);
      this.pages = [
          {name: 'Apps', image: 'apps.jpg', col: 4, navkey:2},
          {name: 'Web Development', image: 'webdev.jpg', col: 4, navkey:1},
          {name: 'Music', image: 'music.jpg', col: 4, navkey:3}
      ];
    }
    
    pageChange = (page) => {
        this.props.changePage(page);
    }
    
    renderTile = (pg, i) => {
        return (
            <div className={"col-sm-" + pg.col}>
            <Card >
                <CardMedia
                    overlay={<CardTitle title={pg.name}/>}
                >
                    <img style={{height: 200}} src={"images/" + pg.image} />
                </CardMedia>
            </Card>
            </div>
        );
    }
    
    
    render() {
        const actions = [
          <FlatButton
            label="Close"
            onTouchTap={this.handleClose}
          />
        ];
        
      return (
        <div className="HomeBanner">
          <img className="FTWelcome" src="images/FTwelcomeWHITE.png"></img>
          <hr />
          <div className="home-menu">
            <a href="#experience">Experience</a> - <a href="#dev">Development</a> - <a href="#apps">Apps</a> - <a href="#music">Music</a>
          </div>
          <br/>
          <p>This site was made using <a href="https://facebook.github.io/react/" target="_blank">React.js</a>, <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> and <a href="http://www.material-ui.com/#/" target="_blank">Material-UI</a>.</p>
        </div>
      );
    }
    
}
