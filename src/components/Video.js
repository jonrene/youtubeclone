import React from "react";

export default function Video({thumbnail, channelImage, videoTitle, channelName, views, date, length}){
    return(
        <>
            <button className="video">
                <div className="thumbnail-container">
                    <div className="video-length">{length}</div>
                    <img className="thumbnail" src={thumbnail} alt="thumbnail"></img>
                </div>
                <div className="video-details">
                    <img className="channel-image"src={channelImage} alt="channel"></img>
                    <div className="video-info">
                        <h3 className="video-title">{videoTitle}</h3>
                        <p className="channel-name">{channelName}
                            <img className="verified" src="./images/profiles/verified.jpeg" alt="verified"></img>
                        </p>
                        <p className="views-time">{views} <strong>{String.fromCharCode(183)}</strong> {date}</p>
                    </div>
                </div>
            </button>
        </>
    )
}