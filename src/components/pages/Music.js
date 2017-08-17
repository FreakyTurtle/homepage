import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {grey50, grey500, teal300, teal600} from 'material-ui/styles/colors';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';

export default class Music extends React.Component {
    
    constructor(props) {
      super(props);
      this.songs = [
          {title:"Weight of the World", by:"James Guest", embed:"https://www.youtube.com/embed/6SmI4cnbbbw?rel=0", featured:true},
          {title:"Bad Beat", by:"James Guest", embed:"https://www.youtube.com/embed/IcqM2nVN7Is?rel=0"},
          {title:"If Only", by:"James Guest", embed:"https://www.youtube.com/embed/-_3-HUE1gag?rel=0"},
          {title:"Feelin Alright", by:"James Guest", embed:"https://www.youtube.com/embed/Gm05cQbeU14?rel=0", featured:true},
          {title:"Find Someone", by:"James Guest", embed:"https://www.youtube.com/embed/pBoegYZ8uuU?rel=0"},
          {title:"Amen", by:"James Guest", embed:"https://www.youtube.com/embed/EwvS5iUUxJo?rel=0"},
          {title:"Heartless", by:"James Guest featuring Archit3kt", embed:"https://www.youtube.com/embed/cZPP6a0ixBw?rel=0", featured:true},
          {title:"Can't Lose Me", by:"James Guest", embed:"https://www.youtube.com/embed/U5aOiLJ65jQ?rel=0"},
          {title:"Burn This F***er Down", by:"James Guest", embed:"https://www.youtube.com/embed/h_MsZdp099U?rel=0"},
          
      ];
      this.styles = {
          chip: {
            margin: 4,
            display: 'inline-block'
          },
          wrapper: {
            display: 'flex',
            flexWrap: 'wrap',
          },
      };
      this.state = {
          selected: 0,
      };
      this.songChips = this.songChips.bind(this);
    }
    
    renderSongs = (song, i) => {
        
        return (<div className={song.featured ? "col-sm-6" : "col-sm-6"}>
        <iframe width={song.featured ? '560' : '560'} height={song.featured ? "315" : "315"} src={song.embed} frameborder="0" allowfullscreen></iframe>
        </div>);
        
        
        return (
            <GridTile
              key={i}
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={song.featured ? 2 : 1}
              rows={song.featured ? 2 : 1}
            >
            <div style={{position: 'relative',
                    	paddingBottom: '56.25%',// /* 16:9 */
                    	paddingTop: '25px',
                    	height: 0
                    }}>
            <iframe width={song.featured ? (2*this.state.standard_width) : this.state.standard_width} height={song.featured ? "315" : "157.5"} src={song.embed} frameborder="0" allowfullscreen></iframe>
            </div>
            </GridTile>
        );
    }
    
    songChips = (song, i ) => {
        return (
            <Chip
                onTouchTap={() => {
                    this.setState({selected: i});
                }}
                style={this.styles.chip}
                backgroundColor={i === this.state.selected ? teal600 : teal300}
                labelColor={grey50}
                key={i}
            >
              {song.title}
            </Chip>
        );
    }
    
    render() {
        
        return (
            <div style={{textAlign:'center'}}>
                {this.songs.map(this.songChips)}
                <Paper
                    style={{
                    position: 'relative',
                	paddingBottom: '56.25%',
                	paddingTop: '25px',
                	height: 0
                    }}
                    zDepth={3}
                >
                <iframe
                style={{position: 'absolute',
                	top: '0',
                	left: '0',
                	width: '100%',
                	height: '100%'
                }}
                 width="580" height="315" src={this.songs[this.state.selected].embed} frameborder="0" allowfullscreen></iframe>
                </Paper>
            </div>
        );
        
        return(
            <div >
                <div className="row">
                {this.songs.map(this.renderSongs)}
                </div>
            </div>
                
        );
    }
}
