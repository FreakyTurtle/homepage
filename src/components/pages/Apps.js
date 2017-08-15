import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';

export default class Apps extends React.Component {
    
    constructor(props) {
      super(props);
      this.appinfo = [
          {
              name: "Boxly",
              href: "https://play.google.com/store/apps/details?id=com.freakyturtle.boxly",
              blurb: [
                  "Ridiculously simple, fiendishly hard. Catch the Balls in the square!",
                  "-Touch the top of the screen to remove the top of the square",
                  "-Touch the bottom of the screen to remove the bottom of the square",
                  "-Touch the left of the screen to remove the left of the square",
                  "-Touch inside the square to remove all 4 sides!",
                  "Careful though! Don't let the balls escape!",
                  "Each ball has it's own countdown timer, have it caught in the box when it hits 0 to keep your lives and add to your score otherwise the ball will burst losing you a life! Don't drop any of the square's lines on top of the balls or they will also burst!",
                  "You have 5 lives! Good Luck!"
              ]
          },
          {
              name: "Noozium",
              href: "http://www.noozium.com",
              blurb: ["News, but in a new way"]
          },
          {
              name: "Nooz",
              href: "https://play.google.com/store/apps/details?id=com.sandfly.freakyturtle.nooz",
              blurb: ["NOOZ by Freaky Turtle uses your social activity and in-app activity to deliver all the latest news to your device in order of relevance to you."]
          },
          {
              name: "Plopi",
              href: "https://play.google.com/store/apps/details?id=com.sandfly.freakyturtle.plopdrop",
              blurb: ["Plopi is a game that gives you control over a number of different birds and allows you to let off some steam by dropping plops on the passers by below."]
          }
      ]
    }
    renderTab = (app, i) => {
        return (
            <Tab
            label={app.name}
            >
            <CardTitle title={app.name} />
            <CardText
            children = {app.blurb.map((para, i) => {
                return (<p>{para}</p>);
            })}
            >
            </CardText>
            <CardActions>
            <FlatButton
            children = {<a className="button-link" href={app.href} target="_blank">Try It</a>}
            />
            </CardActions>
            </Tab>
        );
    }
    
    
    render() {
        return(
            <Card>
            <Tabs>
            {this.appinfo.map(this.renderTab)}
            </Tabs>
            </Card>
        );
    }
}
