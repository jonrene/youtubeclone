import React from "react";

export default function Video({thumbnail, channelImage, videoTitle, channelName, videoViewsTime}){
    return(
        <>
            <button className="video">
                <img className="thumbnail" src={thumbnail} alt="thumbnail"></img>
                <div className="video-details">
                    <img className="channel-image"src={channelImage} alt="channel"></img>
                    <div className="video-info">
                        <h3 className="video-title">{videoTitle}</h3>
                        <p className="channel-name">{channelName}
                            <img className="verified" src="./images/profiles/verified.jpeg" alt="verified"></img>
                        </p>
                        <p className="views-time">{videoViewsTime}</p>
                    </div>
                </div>
            </button>
        </>
    )
}