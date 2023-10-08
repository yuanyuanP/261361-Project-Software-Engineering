import React from 'react'
import "./App.css";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

export default function ChatMessage(props) {
  return (
    <div className= {`d-flex  ${props.user && 'justify-content-end'}`}>
      {props.user ? (
        <span className="message-right">
          <div className='userLogo'><img src={userIcon}/></div>
          <span className="message-text">{props.message}</span>
        </span>
      ) : (
        <span className="message-left">
          <div className='chatLogo'><img src={gptImgLogo}/></div>
          <span className="message-text">{props.message}</span>
        </span>
      )}
    </div>
  );
}
