import React, { useEffect, useState } from "react";
import Video from "./Video.js";
import videoData from "../data/videoData.js";

export default function VideoGrid(){

    const [videoList, setVideoList] = useState([]);

    useEffect(()=>{
        let newVideoList = videoData.map((video, index)=>{
            return(
                <Video 
                    key={index}
                    thumbnail={video.thumbnail}
                    channelImage={video.channelImage}
                    videoTitle={video.videoTitle}
                    channelName={video.channelName}
                    views={video.views}
                    date={video.date}
                    length={video.length}
                    >
                </Video>
            )
        })
        setVideoList(newVideoList);

    },[])

    useEffect(()=>{
        window.onscroll = function(){
            if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){
                let currentVideos = videoList;
                let addedVideos = videoData.map((video, index)=>{
                    return(
                        <Video 
                            key={videoList.length + index}
                            thumbnail={video.thumbnail}
                            channelImage={video.channelImage}
                            videoTitle={video.videoTitle}
                            channelName={video.channelName}
                            views={video.views}
                            date={video.date}
                            length={video.length}
                            >
                        </Video>
                    )
                })
                setVideoList([...currentVideos,...addedVideos]);
            }
        }
    })



    return(
        <>
            <div className="video-grid">
                {videoList}
            </div>
        </>
    )
}