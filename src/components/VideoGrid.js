import React from "react";
import Video from "./Video";

export default function VideoGrid(){

    let videoList = [];

    for(let i=0; i < 15; i++){
        videoList.push(
        <Video 
            key={i} thumbnail="./images/thumbnails/nutshell.webp" 
            channelImage={"./images/profiles/nutshell.jpeg"}
            videoTitle="The Fermi Paradox - Where Are All The Aliens? (1/2)"
            channelName={"Kurzgesagt – In a Nutshell"}
            videoViewsTime={"32M views " + String.fromCharCode(183) + " 7 years ago"}
        >

        </Video>
        )
    }

    return(
        <>
            <div className="video-grid">
                {videoList}
            </div>
        </>
    )
}