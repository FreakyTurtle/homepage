import React, { Component } from 'react';
import Home from './pages/Home';

export default class PageContents extends React.Component {

  constructor(props) {
    super(props);
  }
  
  pageSelector = () => {
      if(this.props.page === 'Home'){
          return (
              <Home />
          );
      }else{
          return (
              <div>{this.props.page}</div>
          );
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
