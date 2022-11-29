import React from 'react';
import YouTube from 'react-youtube';
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { input , key2} from './Home'


// import "/.Video.css";
// use params to pull out the id refer to crud lab 
// use react youtube package 

// call fetch 
// return it by giving it options 

// create const for options 
function Video() {
    const { id } = useParams()
    const getOneVideo = `${URL}/video/:id`

    const opts = {
        videoId: id,
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    return <YouTube videoId={id} opts={opts}/>

}








export default Video;