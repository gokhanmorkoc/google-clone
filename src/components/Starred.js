import React, { useEffect, useRef, useState } from "react";
import "../components/Inbox.css";
import { useStateValue } from "../DataContext/DataContext";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Actions from "../Actions";

const Starred = ({ actionsVisible }) => {
  const [{ inbox, removed, page, starred }, dispatch] = useStateValue();
  const history = useHistory(null);
  const [visible, setVisible] = useState(false);
  const [activeEmail, setActiveEmail] = useState("UWdcOFTc7DfzOhI6LpI4");

  const inboxContainer = useRef(null);

  const [selectedEmails, setSelectedEmails] = useState([]);

  return (
    <div className="content__container">
      <div className="pagination__container">
        <Actions
          actionsVisible={visible}
          remove={() => {
            dispatch({
              type: "remove_email",
              removed: selectedEmails,
            });
            // inboxContainer.current.querySelectorAll("input:checked").length = 0;
          }}
        />
      </div>
      <div className="inbox__container" ref={inboxContainer}>
        <ul>
          {starred
            .map((item, index) => (
              <li
                id={item.id}
                className={`inbox__item ${
                  item.isRead == false ? "selected__email" : ""
                }`}
              >
                <div className="checkbox__container">
                  <Checkbox
                    id={item.id}
                    onClick={(e) => {
                      setSelectedEmails([...selectedEmails, item]);
                      if (
                        removed.map((obj) => obj.id).includes(item.id) &&
                        inboxContainer.current.querySelectorAll("input:checked")
                          .length > 0
                      ) {
                        setVisible(true);
                      } else {
                        setVisible(false);
                      }
                    }}
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </div>
                <div className="add__favorites">
                  <img
                    src="https://www.gstatic.com/images/icons/material/system/2x/star_border_white_20dp.png"
                    width="20"
                    height="20"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                  }}
                  onClick={(e) => {
                    console.log(activeEmail);
                    dispatch({ type: "preview_email", payload: item.id });
                    setActiveEmail(item.id);
                    history.push("/preview");
                  }}
                >
                  {" "}
                  <div className="sender__img">
                    <img src={item.image} width="24" height="24" />
                  </div>
                  <div className="sender">
                    {item.owner.firstName} {item.owner.lastName}
                  </div>
                  <div className="preview"> {item.text}</div>
                  <div className="date"> {item.publishDate}</div>
                </div>
              </li>
            ))
            .splice(page - 25, page)}
        </ul>
      </div>
    </div>
  );
};

export default Starred;
