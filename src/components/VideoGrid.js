import React from "react";
import Video from "./Video.js";
import videoData from "../data/videoData.js";

export default function VideoGrid(){
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
                                length={video.length}
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
                                length={video.length}
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
                                length={video.length}
                                >
                            </Video>
                        )
                })}
            </div>
        </>
    )
}