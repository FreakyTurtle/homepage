import React, { Component } from 'react';
import Home from './pages/Home';
import Development from './pages/Development';

export default class PageContents extends React.Component {

  constructor(props) {
    super(props);
  }
  
  pageChange = (page) => {
      this.props.changePage(page);
  }
  
  pageSelector = () => {
      //TO TEST 
    //   return(<Development />);
      
      switch (this.props.page) {
          case 'Home':
              return (<Home
                  changePage={this.pageChange}
                  />);
              break;
          case 'Web Development':
              return (<Development/>);
              break;
          default:
              return (<Home/>);
      }
  }

  render() {
    return (
      <div>
        {this.pageSelector()}
      </div>
    );
  }
}
