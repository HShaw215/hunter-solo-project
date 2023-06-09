// import React, { Component } from 'react';
// import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import '../scss/containerStyles.scss';
// import Container from './Container.jsx';

function Set() {

    const [timer, setTimer] = useState('');

    // const handleSubmit = (timer) => {
    //     // console.log(timer)
    //         fetch('/time', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({timer})
    //     })
    //     .then(response => response.json())
    //     .then(setList =>updateState(setList))
    //     .catch((err) => console.log(err))

    //should've done the work around where nothing populates when you load the page until you say how long you want to play for. Then it renders
        //and updates so you don't have to worry about doing all the state stuff

    // }
    // onClick={ () => handleSubmit(timer)}
    return (
        <div>
           <form>
            <label>How Long is Your Set?
                <input id='setTimer' type="text" placeholder="2" onChange = {e => setTimer(e.target.value)}></input>
                <button id='vibes'>Vibes</button>
            </label>
           </form>
        </div>
        );
    }

export default Set;

//idea is that when the vibes button is pressed, it will send a request to the database to essentially sort the database based on the
    //passed in time and criteria I have to define, then update the container. I think the invocation of the button here will have to
    //send a call to an effect in the main app so that the container can be updated after a new setList is rendered