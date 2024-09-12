import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";


ReactDOM.render(
  <Router>
    <Routes>
        <Route 
        exact path="/"
        Component={App} 
        />
        <Route 
          path="/search"
          Component={Search}
        />
      </Routes>
  </Router>,
  document.getElementById("root")
);
