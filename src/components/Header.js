import React from "react";
import { useEffect } from "react";


export default function Header(){

  useEffect(()=>{
    let input = document.getElementsByClassName("input")[0];

    input.addEventListener("focus", (e)=>{
      e.preventDefault();
      document.getElementsByClassName("form")[0].className = "form form-has-focus";
      document.getElementsByClassName("hidden-search-img")[0].style.display = "block";
      document.getElementsByClassName("middle-container")[0].style.width = "700px";
    })


    input.addEventListener("blur", (e)=>{
      e.preventDefault();
      document.getElementsByClassName("form")[0].className = "form";
      document.getElementsByClassName("hidden-search-img")[0].style.display = "none";
      document.getElementsByClassName("middle-container")[0].style.width = "650px";
    })

  }, [])

  function onInput(e){
    e.preventDefault();
    if(e.target.value === ""){
      console.log("clear")
      document.getElementsByClassName("clear-button")[0].style.display = 'none';
    }else{
      console.log("query")
      document.getElementsByClassName("clear-button")[0].style.display = 'block';
    }
  }

  function clearSearch(){
    document.getElementsByClassName("input")[0].value = "";
    document.getElementsByClassName("clear-button")[0].style.display = 'none';
    document.getElementsByClassName("input")[0].focus();
    
  }


  
  return(
    <header>
      <div className="left-section">
        <button className="menu-button">
          <img className="menu-button-img" src="./images/hamburgerMenu.png" alt="menu" />
        </button>
        <button className="home-button">
          <img className="home-button-img" src="./images/youtubeHome.png" alt="Home"/>
          <div className="tool-tip">Youtube Home</div>
        </button>
      </div>
      <div className="middle-section">
        <div className="middle-container">
          <form className="form">
            <img
              className="hidden-search-img"
              src="./images/search.png"
              alt="search"
            />
            <input
              className="input"
              type="search"
              placeholder="Search"
              autoComplete="off"
              onInput={onInput}
            />
          </form>
          <button className="clear-button" onClick={clearSearch}>
              <img className="clear-button-image"src="./images/close-button.png" alt="clear"></img>
            </button>
          <button className="search-button">
            <img
              className="search-button-img"
              src="./images/search.png"
              alt="search"
            />
            <div className="tool-tip">Search</div>
          </button>
          <button className="voice-search-button">
            <img className="voice-search-button-img" src="./images/mic.png" alt="Voice Search" />
            <div className="tool-tip">Search with your voice</div>
          </button>
        </div>
      </div>
      <div className="right-section">
        <button className="upload-button">
          <img className="upload-img" src="./images/video-add.png" alt="upload"/>
          <div className="tool-tip">Create</div>
        </button>
        <button className="notification-button">
          <img className="notification-img" src="./images/bell.png" alt="notifications" />
          <div className="tool-tip">Notifications</div>
          <div className="notification-number">7</div>
        </button>
        <button className="profile-button">
        </button>
      </div>
    </header>

  )
}