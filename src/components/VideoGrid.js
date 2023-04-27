import React from "react";
import Video from "./Video.js";
import videoData from "../data/videoData.js";

export default function VideoGrid(){
    console.log(videoData);

    return(
        <>
            <div className="video-grid">
                {videoData.map((video, index)=>{
                    return(
                            <Video 
                                key={index}
                                thumbnail={video.thumbnail}
                                channelImage={video.channelImage}
                                videoTitle={video.videoTitle}
                                channelName={video.channelName}
                                views={video.views}
                                date={video.date}
                                >
                            </Video>
                        )
                })}

                {videoData.map((video, index)=>{
                    return(
                            <Video 
                                key={index}
                                thumbnail={video.thumbnail}
                                channelImage={video.channelImage}
                                videoTitle={video.videoTitle}
                                channelName={video.channelName}
                                views={video.views}
                                date={video.date}
                                >
                            </Video>
                        )
                })}

                {videoData.map((video, index)=>{
                    return(
                            <Video 
                                key={index}
                                thumbnail={video.thumbnail}
                                channelImage={video.channelImage}
                                videoTitle={video.videoTitle}
                                channelName={video.channelName}
                                views={video.views}
                                date={video.date}
                                >
                            </Video>
                        )
                })}
            </div>
        </>
    )
}