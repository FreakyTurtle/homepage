import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';
import {grey100, purple800, teal300} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import '../icons/css/FontAwesome.min.css';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PageContents from './PageContents';
import Header from './Header';

export default class MainComponent extends React.Component{
    
    constructor(props) {
      super(props);
      this.state = {
          page: 'Home',
          menuopen: false,
          pages: ['Home', 'Development', 'Music']
      };
      this.muiTheme = getMuiTheme({
          palette: {
              primary1Color: grey100,
              textColor: teal300,
              alternateTextColor: teal300,
          },
          fontFamily: 'Raleway, sans-serif',
          appBar: {
              height: 50
          },
      });
    }
    
    changePageContents = (i) => {
        this.setState({page: this.state.pages[i]});
    }
    
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={this.muiTheme}>
                    <div>
                        <Header 
                            pages={this.state.pages}
                            changePage={this.changePageContents}
                        />
                        <PageContents 
                            page={this.state.page}
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
