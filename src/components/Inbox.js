import React, { useCallback, useEffect, useRef, useState } from "react";
import "../components/Inbox.css";
import { useStateValue } from "../DataContext/DataContext";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Actions from "../Actions";

const Inbox = ({ actionsVisible }) => {
  const [{ inbox, page, nav, removed, starred }, dispatch] = useStateValue();
  const history = useHistory(null);
  const [visible, setVisible] = useState(false);
  const res = useFetch(`https://dummyapi.io/data/api/post?limit=${10}`);
  const [activeEmail, setActiveEmail] = useState("UWdcOFTc7DfzOhI6LpI4");
  // const [isDeleted, setDeleted] = useState(false);

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (res.response !== null && !removed.length && starred.length === 0) {
      dispatch({ type: "load_inbox", payload: res.response.data, page: page });
    }
  }, [res.response, page]);

  const inboxContainer = useRef(null);

  const [selectedEmails, setSelectedEmails] = useState([]);

  let a = "hello";

  const memoizedCallback = useCallback(() => {
    console.log(a);
  }, [a]);

  memoizedCallback();

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

            inboxContainer.current
              .querySelectorAll("input[type=checkbox]:checked")
              .forEach((item) => (item.checked = false));
          }}
        />
        <div className="pagination">
          {" "}
          {page > 25 ? (
            <button
              onClick={() => {
                dispatch({
                  type: "load_inbox",
                  payload: res.response.data,
                  page: page - 25,
                });
              }}
            >
              {"<"}
            </button>
          ) : null}
          {page - 25}-{page}
          <button
            onClick={() => {
              dispatch({
                type: "load_inbox",
                payload: res.response.data,
                page: page + 25,
              });
            }}
          >
            {">"}
          </button>
        </div>
      </div>
      <div className="inbox__container" ref={inboxContainer}>
        <ul>
          {inbox
            .map((item, index) => (
              <li
                id={item.id}
                className={`inbox__item ${
                  item.isRead == false ? "selected__email" : ""
                }`}
              >
                <div className="checkbox__container">
                  <input
                    // inputProps={{ "aria-label": "primary checkbox" }}
                    id={item.id}
                    onChange={(e) => {
                      setSelectedEmails([...selectedEmails, item]);
                      if (
                        inbox.map((obj) => obj.id).includes(item.id) &&
                        inboxContainer.current.querySelectorAll(
                          "input[type=checkbox]:checked"
                        ).length > 0
                      ) {
                        setVisible(true);
                      } else {
                        setVisible(false);
                      }
                    }}
                    id={item.id}
                    type="checkbox"
                  />
                </div>
                <div
                  className="add__favorites"
                  onClick={() => {
                    if (!item.isStarred) {
                      dispatch({
                        type: "addTo_favorites",
                        payload: item,
                        isStarred: true,
                      });
                    } else {
                      dispatch({
                        type: "addTo_favorites",
                        payload: item,
                        isStarred: false,
                      });
                    }
                    // history.push("/deleted");
                  }}
                >
                  <img
                    src={
                      item.isStarred
                        ? "https://www.gstatic.com/images/icons/material/system/1x/star_googyellow500_20dp.png"
                        : "https://www.gstatic.com/images/icons/material/system/2x/star_border_white_20dp.png"
                    }
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
            .splice(page - page, page + 15)}
        </ul>
      </div>
    </div>
  );
};

export default Inbox;
