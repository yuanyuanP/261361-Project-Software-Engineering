//Chatbot.js
import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { analyze } from "./question";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import "./App.css";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message:
        "Welcome to Botbots! 🤖 How can I assist you today? Feel free to ask any questions or request information, and I'll do my best to provide you with helpful answers and assistance. Firstly Can I Know your Name???",
    },
  ]);

  const [text, setText] = useState("");

  const handleEnter = async (e) => {
    if (e.key === "Enter") await onSend();
  };

  const onSend = () => {
    let list = [...messages, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text);
      list = [...list, { message: reply }];
    } else {
      list = [
        ...list,
        {
          message: `Hi, ${text}`,
        },
        {
          message: "How i can help u",
        },
      ];
    }
    setMessages(list);
    setText("");
    setTimeout(() => {
      document.querySelector("#chat-messages").scrollIntoView();
    }, 1);
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">BotBots</span>
          </div>
          <button
            className="midBtn"
            onClick={() => {
              window.location.reload();
            }}
          >
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <div>
              <p>NOTE</p>
              <p>
                The scope of BotBots questions is information related to
                CPE&ISNE.
              </p>
              <p>including Subject Name, Subject Code, and Lecturers.</p>
              <br></br>

              <p>
                This is the pattern of Question you need to use, before asking
                BotBots.
              </p>
              <p>· what is subject code of "subject-name" for "CPE/ISNE"</p>
              <p>· what is subject name of "subject-code" for "CPE/ISNE"</p>
              <p>· who is lecturers of "subject-name" for "CPE/ISNE"</p>
              <p>· who is lecturers of "subject-code" for "CPE/ISNE"</p>
              <p>
                · list of subject name for "first/second/third/fourth" year
                student of "CPE/ISNE"
              </p>
              <br></br>
              <p>example</p>
              <p>what is subject code of Calculus 1 for ISNE</p>
              <p>what is subject name of 207105 for CPE</p>
              <p>who is the lecturers of Intro to ISNE for ISNE</p>
              <p>list of subject name for fourth year student of CPE</p>
            </div>
          </div>
        </div>
        <div className="lowerSide">
          <div className="lowerSide">
            <div className="listItems">
              <img src={home} alt="Home" className="listItemImg" />
              Home
            </div>
            <div className="listItems">
              <img src={saved} alt="Saved" className="listItemImg" />
              Saved
            </div>
            <div className="listItems">
              <img src={rocket} alt="Upgrade" className="listItemImg" />
              Upgrade To Pro
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chat-message" id="chat-messages">
          {messages.length > 0 &&
            messages.map((data) => <ChatMessage {...data} />)}
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send A Message"
              value={text}
              onKeyDown={handleEnter}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button type="primary" className="send" onClick={onSend}>
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>
            Botbots is a chatbot that utilizes the OpenAI API to answer user
            questions. This enhances the overall user experience and improves
            the efficiency, benefiting stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
}
