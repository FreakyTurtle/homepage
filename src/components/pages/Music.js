import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

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
          {title:"Burn This Fucker Down", by:"James Guest", embed:"https://www.youtube.com/embed/h_MsZdp099U?rel=0"},
          
      ];
      this.styles = {
          root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          },
          gridList: {
            width: 560,
            overflowY: 'auto',
          },
      };
    }
    
    renderSongs = (song, i) => {
        return (
            <GridTile
              key={i}
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={song.featured ? 2 : 1}
              rows={song.featured ? 2 : 1}
            >
            <iframe width={song.featured ? "560" : "280"} height={song.featured ? "315" : "157.5"} src={song.embed} frameborder="0" allowfullscreen></iframe>
            </GridTile>
        );
    }
    
    render() {
        return(
            <div style={this.styles.root}>
                <GridList
                  cols={2}
                  cellHeight="auto"
                  padding={1}
                  style={this.styles.gridList}
                >
                {this.songs.map(this.renderSongs)}
                </GridList>
            </div>
                
        );
    }
}
