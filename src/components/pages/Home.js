import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {grey50, grey500, teal300} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

export default class Home extends React.Component {
    
    constructor(props) {
      super(props);
    }
    
    pageChange = (page) => {
        this.props.changePage(page);
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
          <p>
              <span onClick={() => this.pageChange(0)}>Music</span> - 
              <span onClick={() => this.pageChange(2)}>Apps</span> - 
              <span onClick={() => this.pageChange(1)}>Development</span>
          </p>
        </div>
      );
    }
    
}
