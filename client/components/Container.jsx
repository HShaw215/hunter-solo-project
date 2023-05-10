// import React, { Component } from 'react';
// import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import '../scss/containerStyles.scss';
import Song from './Song.jsx';

function Container() {
    const [setList, setSetList] = useState([])

    //how do we replace component did mount with useEffect for hooks?
     useEffect(() => {
         console.log('App mounted')
         //send a get request to the songs endpoint to get all the songs in the database
         fetch('/songs')
           .then(response => response.json())
           .then(setList => setSetList(setList))
           .catch((err) => console.log(err))
       }, []);
     //   console.log(setList)
        //need to create a loop to check how many items exist in the database, and create an element for each one of those songs
    // //once the container element loads
    // componentDidMount() {
    //     //send a get request to the songs endpoint to get all the songs in the database
    //     fetch('/songs')
    //       .then(response => response.json())
    //       .then(setList => this.setState({setList}));
    //   }
    //need to create a loop to check how many items exist in the database, and create an element for each one of those songs

    // const songsToDisplay = [];
    for (let i = 0; i < setList.length; i++){
        songsToDisplay.push(<Song key={i} song={setList[i]}/>)
    }
    // console.log(this.state.setList.songs)   //give an array of each song object, need to make a new div for each song
    // const set = this.state.setList.songs.forEach(song => <div className="songBox" key={song.key}>{song}</div>);
    return (
        <div class="container">
            {songsToDisplay}
        </div>
        );
    }



export default Container;