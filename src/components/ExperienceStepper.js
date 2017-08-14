import React from 'react';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

    export default class ExperienceStepper extends React.Component {

    constructor(props) {
        super(props);
        this.experience = [
            {
                title: "Hill House International Junior School (London and Switzerland",
                years: " - 2002",
                blurb: "Common Entrance 13+ exams all grade A or above. Played competitive tennis for the Queens Club Junior Tennis team."
            },
            {
                title: "Latymer Upper School",
                years: "2002 - 2006",
                blurb: "GCSEs (2Bs, 2A*s and the rest A’s) in Maths, French, History, Physics, Biology, Chemistry, English Literature, English, Music, Music Technology, Religious Education, Italian and Physical Education. Also, a Further Qualification in Maths."
            },
            {
                title: "Work Experience Queens Park Recording Studio",
                years: "2005",
                blurb: "Work Experience while at Latymer in a local recording studio"
            },
            {
                title: "St Marylebone Sixth Form",
                years: "2006 - 2008",
                blurb: "AS Level in Maths, Psychology, Music Technology, and English Literature. A levels in English Literature, Psychology and Music Technology."
            },
            
            {
                title: "Work Experience Queens Park Community Radio Station",
                years: "2006",
                blurb: "Work Experience while at St Marylebone in a local community radio station"
            },
            {
                title: "Assistant Tennis Coach",
                years: "Various",
                blurb: ""
            },
            {
                title: "Waitrose Sales Assistant",
                years: "2010 - 2012",
                blurb: "After education i took part-time work at Waitrose where special emphasis was placed on the importance of customer relations and this re-enforced to me the importance of valuing customer feedback."
            },
            {
                title: "Professional Online Poker Player",
                years: "2012 - 2013",
                blurb: "While working at Waitrose, having played poker for a while as a hobby, i discovered that I could support myself playing online and I used this opportunity to leave Waitrose and teach myself computer programming skills."
            },
            {
                title: "Freelance Web and Android App Developer",
                years: "2013 - 2015",
                blurb: "Being a lifelong technology fanatic I was particularly excited by the emergence of new frameworks and the Android operating system and its opportunities. I began by teaching myself web-based programming languages HTML5, CSS3, PHP, JavaScript, MySQL and JQuery and then moved to Java and the Android SDK. When the poker service I used closed down the tournaments that i found most profitable I stopped playing poker and gave full-time attention to working as a freelance developer, initially specialising in Android application development and full stack web development. I developed three apps for myself in this time, under the developer name of FreakyTurtle, two games (Plopi and Boxly) and one news aggregating service that analysed a user’s social media posts and rearranged news from numerous sources based on relevance (Nooz), I also developed two websites, freakyturtle.com for my development and creative works and noozium.com as a sister platform to my Nooz app. The latter was built using the bootstrap framework and both utilise responsive web design principals for screens of all sizes from mobile to desktop. Working on these projects gave me additional skills in social media integration, Google’s Material Designs and Android Studio. I also developed projects for outside clients and this gave me a good appreciation of the importance of flexibility to meet changing needs, time management and the importance of writing easy-to- read code. I also worked for clients on various projects ranging from web- development to mobile app development and data accumulation/management through PHP and Python bot creation."
            },
            {
                title: "Front End Developer at Elucidat E-Learning",
                years: "Jan 2016 - Present",
                blurb: "I joined Elucidat, an E-Learning start-up, as a front-end developer and only their second hired developer. Initially i was responsible for custom theme and functionality requirements for clients, before moving to feature development and maintenance for the app and website. During my time at Elucidat the company has grown from a start-up to serving over 2 million learners from many of the world’s biggest companies (such as Coca-Cola, Comcast, Hitachi, Tesco, PwC , Auchan and Roche Diagnostics) and has given me the opportunity to work in an AGILE environment utilising SCRUM with new and emerging technologies and frameworks such as JavaScript ES6, React.js and Redux."
            },
            
        ]
    }

    state = {
        stepIndex: 0,
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex < (this.experience.length-1)) {
            this.setState({stepIndex: stepIndex + 1});
        }
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    renderStepActions(step) {
        return (
            <div style={{}}>
            {step < (this.experience.length-1) && (
                <RaisedButton
                    label="Next"
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={this.handleNext}
                    style={{marginRight: 12}}
                />
            )}
            
            {step > 0 && (
                <FlatButton
                    label="Back"
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    onTouchTap={this.handlePrev}
                />
            )}
            </div>
        );
    }
    
    outputSteps = (step, i) => {
        return (
            <Step key={i}>
            <StepButton onTouchTap={()=> this.setState({stepIndex:i})}>
                {'('+step.years + ') ' +step.title}
            </StepButton>
            <StepContent>
                <p>{step.blurb}</p>
                {this.renderStepActions(i)}
            </StepContent>
            </Step>
        );
    }

    render() {
        const {stepIndex} = this.state;

        return (
            <div style={{margin: 'auto'}}>
                <Stepper
                    activeStep={stepIndex}
                    linear={false}
                    orientation="vertical"
                >
                    {this.experience.map(this.outputSteps)}
                </Stepper>
            </div>
        );
    }
}
