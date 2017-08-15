import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Header extends React.Component {
    
    constructor(props) {
      super(props);
      this.state ={open: false};
    }
    
    
    
    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});
    
    menuItemClick = (i) => {
        this.props.changePage(i);
        this.setState({open: false});
    }
    
    returnMenuItems = (pg, i) => {
        return (
            <MenuItem key={i}><a className="sidemenu-links" onClick={this.handleToggle} href={"#" + pg.href}>{pg.name}</a></MenuItem>
        );
    }
      
    render() {
        return(
            <AppBar
                title="Freaky Turtle"
                iconClassNameRight="fa fa-github"
                onLeftIconButtonTouchTap={this.handleToggle}
                style={{fontFamily: 'Lobster, cursive', textAlign: 'center', letterSpacing: '1px', color: '#49004e'}}
            >
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
            {this.props.pages.map(this.returnMenuItems)}
            </Drawer>
            </AppBar>
        );
    }
}
