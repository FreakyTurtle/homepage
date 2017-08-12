import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {grey50, grey500, teal300} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class Home extends React.Component {
    
    constructor(props) {
      super(props);
      this.styles = {
          chip: {
            margin: 4,
            opacity: '1',
            display: 'inline-block'
          },
          wrapper: {
          },
        };
        this.state = {title: "", open:false, blurb: ""}
        
        this.skills = [
            {text: "Javascript", classes: "",
                blurb: "More than 5 years experience in production environments with Javascript.  Working on responsive websites, web apps and mobile-first apps as both a freelance and full-time developer.  This includes working for an e-learning startup that now caters for over 2 million learners in some of the world's largest and most prestigious companies."
            },
            {text: "React.js", classes: "",
                blurb: "Experience building websites from the ground-up with React.js, and introducing it into the workflow of an already live app, with over 2 million active users.  This site is made with React.js and the Material UI set of components.  A link to the source code on Github is in the top right corner of the page."
            },
            {text: "Bootstrap", classes: "",
                blurb: "Several years commercial experience implementing bootstrap to improve responsive design in both old and new apps and websites."
            },
            {text: "JQuery", classes: "",
                blurb: "Several years commercial experience using JQuery in a wide variety of apps and websites"
            },
            {text: "vue.js", classes: "",
                blurb: "As an early adopter of vue.js when learning the Laravel framework, I have championed it amog colleagues as the best compromise between Angular and React."
            },
            {text: "CSS", classes: "fa fa-css3",
                blurb: "HTML and CSS were the first languages I taught myself in school when an interest in development first hit me."
            },
            {text: "SASS", classes: "",
                blurb: "Experience using SASS for 2 years with an e-learning company that provides e-learning to some of the world's largest companies, such as Coca-Cola, Comcast and Tesco, being personally responsible for ensuring that the styling met their demanding brand criteria."
            },
            {text: "HTML5", classes: "fa fa-html5",
                blurb: "HTML and CSS were the first languages I taught myself in school when an interest in development first hit me."
            },
            {text: "Github", classes: "fa fa-github",
                blurb: "Commercial and personal experience using Github, a link to the repository for this website is in the top right of the page"
            },
            {text: "PHP", classes: "",
                blurb: "Several years personal experience learning and developing with PHP, including versions up to 7.  1 year experience commercially as a freelance developer, mainly focused on bot-creation for data-scraping"
            },
            {text: "redux", classes: "",
                blurb: "Commercial experience introducing redux, along with React, into the workflow of an already live app, with over 2 million active users."
            },
            {text: "Laravel", classes: "",
                blurb: "Self-taught on the laravel framework, and a champion of it to colleagues, it has been the basis for several personal development projects"
            },
            {text: "MySQL", classes: "",
                blurb: "Several years experience working with MySQL both commercially and personally, as well as some experience with SQLite when working on the Android native platform"
            },
            {text: "Node.js", classes: "",
                blurb: "Several years experience with Node.js, in commercial and personal projects."
            },
            {text: "NVM", classes: "Several years experience with NVM, in commercial and personal projects.",
                blurb: ""
            },
            {text: "npm", classes: "",
                blurb: "Several years experience with npm, in commercial and personal projects."
            },
            {text: "AngularJS", classes: "",
                blurb: "Some experience with AngularJS making company websites"
            },
            {text: "JSON", classes: "",
                blurb: "Several years experience with JSON, in commercial and personal projects."
            },
            {text: "AJAX", classes: "",
                blurb: "Several years experience with AJAX, in commercial and personal projects."
            },
            {text: "XML", classes: "",
                blurb: "Several years experience with XML, in commercial and personal projects."
            },
            {text: "Git", classes: "",
                blurb: "Several years experience with Git, in commercial and personal projects."
            },
            {text: "Android", classes: "fa fa-android",
                blurb: "2 years experience developing apps personally for the Android platform, these include two games (Boxly and Plopi) and a news aggregating service based on social media usage (Nooz)"
            },
            {text: "Android SDK", classes: "fa fa-android",
                blurb: "2 years experience developing apps personally for the Android platform, these include two games (Boxly and Plopi) and a news aggregating service based on social media usage (Nooz)"
            },
            {text: "Drupal", classes: "fa fa-drupal",
                blurb: "Several years experience with Drupal, in commercial and personal projects."
            },
            {text: "Wordpress", classes: "fa fa-wordpress",
                blurb: "Several years experience with Wordpress, in commercial and personal projects."
            },
            {text: "Joomla", classes: "fa fa-joomla",
                blurb: "Several years experience with Joomla, in commercial and personal projects."
            },
            {text: "SEO", classes: "",
                blurb: "Several years experience in SEO best practices, in commercial and personal projects."
            },
            {text: "AGILE/SCRUM/Kanban", classes: "",
                blurb: "Experience in workplaces that use different approaches and methodoligies to achieve a good work flow."
            },
            
        ]
    }
    
    handleTouchTap = (i) => {
        this.setState({
            title: this.skills[i].text, 
            blurb: this.skills[i].blurb,
            open: true
        });
    }
    
    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };
    
    renderChip = (skill, i) => {
        
        return (
            <Chip
              onTouchTap={() => this.handleTouchTap(i)}
              style={this.styles.chip}
              backgroundColor={teal300}
              labelColor={grey50}
              key={i}
            >
              {skill.text}
            </Chip>
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
          <img className="FTWelcome" src="images/FTwelcome.png"></img>
          <div className="chipcontainer" style={this.styles.wrapper}>
              {this.skills.map(this.renderChip)}
              <Dialog
                title={this.state.title}
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                bodyClassName="FTPurple"
              >
                {this.state.blurb}
              </Dialog>
          </div>
        </div>
      );
    }
    
}
