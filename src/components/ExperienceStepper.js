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
                blurb: ["Common Entrance 13+ exams all grade A or above.", "Played competitive tennis for the Queens Club Junior Tennis team."]
            },
            {
                title: "Latymer Upper School",
                years: "2002 - 2006",
                blurb: ["GCSEs (2Bs, 2A*s and the rest A’s) in Maths, French, History, Physics, Biology, Chemistry, English Literature, English, Music, Music Technology, Religious Education, Italian and Physical Education. Also, a Further Qualification in Maths."]
            },
            {
                title: "Work Experience Queens Park Recording Studio",
                years: "2005",
                blurb: ["Work Experience while at Latymer in a local recording studio"]
            },
            {
                title: "St Marylebone Sixth Form",
                years: "2006 - 2008",
                blurb: ["AS Level in Maths, Psychology, Music Technology, and English Literature. A levels in English Literature, Psychology and Music Technology."]
            },
            
            {
                title: "Work Experience Queens Park Community Radio Station",
                years: "2006",
                blurb: ["Work Experience while at St Marylebone in a local community radio station"]
            },
            {
                title: "Assistant Tennis Coach",
                years: "Various",
                blurb: [""]
            },
            {
                title: "Waitrose Sales Assistant",
                years: "2010 - 2012",
                blurb: ["After education i took part-time work at Waitrose where special emphasis was placed on the importance of customer relations and this re-enforced to me the importance of valuing customer feedback."]
            },
            {
                title: "Professional Online Poker Player",
                years: "2012 - 2013",
                blurb: ["While working at Waitrose, having played poker for a while as a hobby, i discovered that I could support myself playing online and I used this opportunity to leave Waitrose and teach myself computer programming skills."]
            },
            {
                title: "Freelance Web and Android App Developer",
                years: "2013 - 2015",
                blurb: ["In this period i also made two personal websites, freakyturtle.com and noozium.com (a news aggregating service) as well as three apps for the Google Play Store, 2 Games (Plopi and Boxly) and a sister service to my noozium site (Nooz)"]
            },
            {
                title: "Front End Developer at Elucidat E-Learning",
                years: "Jan 2016 - Present",
                blurb: ["Responsible for feature development, maintenance, and special client requests for the app that serves over 2 million learners for companies like Coca-Cola, Comcast, Hitachi, Tesco, PwC, Auchan and Roche Diagnostics.", 
                "Predominantly working with Javascript, JQuery, ReactJS, Redux  and Bootstrap"]
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
                {step.blurb.map((blurb, i) => {
                    return(
                        <p>{blurb}</p>
                    );
                })}
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
