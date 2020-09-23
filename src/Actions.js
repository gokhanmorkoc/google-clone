import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Actions = ({ actionsVisible, archive, spam, remove }) => {
  const history = useHistory(null);
  return (
    <div
      className="actions__container"
      style={
        actionsVisible
          ? { display: "flex", background: "#2e2e2e" }
          : { display: "none" }
      }
    >
      <div className="back" onClick={() => history.push("/")}>
        <img src="https://www.gstatic.com/images/icons/material/system/2x/arrow_back_white_20dp.png" />
      </div>
      <div className="archive" onClick={archive}>
        <img src="https://www.gstatic.com/images/icons/material/system/2x/archive_white_20dp.png" />
      </div>
      <div className="spam" onClick={spam}>
        <img src="https://www.gstatic.com/images/icons/material/system/2x/report_white_20dp.png" />
      </div>
      <div className="remove" onClick={remove}>
        <img src="https://www.gstatic.com/images/icons/material/system/2x/delete_white_20dp.png" />
      </div>
    </div>
  );
};

export default Actions;
