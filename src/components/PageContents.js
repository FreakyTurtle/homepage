import React, { Component } from 'react';
import Home from './pages/Home';
import Development from './pages/Development';
import Section from './Section';
import ExperienceStepper from './ExperienceStepper';
import Apps from './pages/Apps';
import Music from './pages/Music';

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
      <div style={{
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        width: '100%'
        }}>
        <a name="home"></a>
        <Section
            theme="regular"
            children={<div><Home /></div>}
         /> 
         <a name="experience"></a>
        <Section
            theme="inverse"
            title="Experience"
            children={<div><ExperienceStepper /></div>}
         /> 
         <a name="dev"></a>
         <Section
             theme="regular"
             title="Development"
             children={<div><Development /></div>}
          />
          <a name="apps"></a>
         <Section
             theme="inverse"
             title="Apps"
             children={<div><Apps /></div>}
          />
          <a name="music"></a>
         <Section
             theme="regular"
             title="Music"
             children={<div><Music /></div>}
          />
      </div>
    );
  }
}
