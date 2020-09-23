import React, { useEffect, useState } from "react";
import "./App.css";
import Compose from "./components/Compose";
import Header from "./components/Header";
import Inbox from "./components/Inbox";
import Nav from "./components/Nav";
import { useStateValue } from "./DataContext/DataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./components/Preview";
import Test from "./components/Test";
import Deleted from "./components/Deleted";
import Starred from "./components/Starred";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <div className="section__container">
              <Nav />
              <Inbox />
            </div>
          </Route>
          <Route path="/preview" exact>
            <div className="section__container">
              <Nav />
              <Preview />
            </div>
          </Route>
          <Route path="/test" exact>
            <Test />
          </Route>
          <Route path="/deleted" exact>
            <div className="section__container">
              <Nav />
              <Deleted />
            </div>
          </Route>

          <Route path="/starred" exact>
            <div className="section__container">
              <Nav />
              <Starred />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
