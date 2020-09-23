import React, { useState } from "react";
import "../components/Compose.css";

const Compose = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const ComposePopup = () => {
    return (
      <div className="compose__window">
        <div className="compose__mainHeader">
          <h1>New Message</h1>
          <div className="compose__actions">
            <a role="button"> &#8722; </a>
            <a> &#10530; </a>
            <a onClick={() => setPopupVisible(false)}> &#9747; </a>
          </div>
        </div>
        <div className="compose__header">
          <input className="recipients" placeholder="Recipients"></input>
          <input className="subject" placeholder="Subject"></input>
        </div>
        <div className="compose__body">
          <textarea></textarea>
        </div>
        <div className="compose__footer">
          <button>Send</button>
          <button>
            <img src="https://www.gstatic.com/images/icons/material/system/2x/delete_white_20dp.png"></img>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="compose__container">
      <div
        class="compose"
        role="button"
        tabindex="0"
        onClick={() => {
          if (!popupVisible) {
            setPopupVisible(true);
          } else {
            setPopupVisible(false);
          }
        }}
      >
        Compose
      </div>
      {popupVisible ? <ComposePopup /> : null}
    </div>
  );
};

export default Compose;
