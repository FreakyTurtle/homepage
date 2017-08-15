import React, { Component } from 'react';

export default class Section extends React.Component {
    
    constructor(props) {
      super(props);
    }
    
    
    render() {
        return(
            <div className={"section " + this.props.theme}>
            <div className="section-title">{this.props.title}</div>
                <div className="container">
                {this.props.children}
                </div>
            </div>
        );
    }
}
