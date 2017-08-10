import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';
import {grey100, purple800, teal300} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import '../icons/css/FontAwesome.min.css';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class MainComponent extends React.Component{
    
    constructor(props) {
      super(props);
      this.state = {open: false};
      this.muiTheme = getMuiTheme({
          palette: {
              primary1Color: grey100,
              textColor: teal300,
              alternateTextColor: teal300,
          },
          appBar: {
              height: 50
          }
      });
      this.images = {
          welcome: 'images/FTwelcome.png'
      };
      this.welcome_image = <img src={this.images.welcome}></img>;
    }
    
    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});
    
    
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={this.muiTheme}>
                <div>
                <AppBar
                    title="Freaky Turtle"
                    iconClassNameRight="fa fa-github"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    style={{fontFamily: 'Lobster, cursive', letterSpacing: '1px', color: '#49004e'}}
                />
                <Drawer
                  docked={false}
                  width={200}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
                >
                  <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                  <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
                </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
// 
// const muiTheme = getMuiTheme({
//     palette: {
//         primary1Color: grey100,
//         textColor: teal300,
//         alternateTextColor: teal300,
//     },
//     appBar: {
//         height: 50
//     }
// });
// const images = {
//     welcome: 'images/FTwelcome.png'
// };
// const welcome_image = <img src={images.welcome}></img>;
// 
// const MainComponent = () => (
//     <MuiThemeProvider muiTheme={muiTheme}>
//         <AppBar
//             title="Freaky Turtle"
//             iconClassNameRight="fa fa-github"
//             style={{fontFamily: 'Lobster, cursive', letterSpacing: '1px', color: '#49004e'}}
//         />
//     </MuiThemeProvider>
// );
// 
// export default MainComponent;
