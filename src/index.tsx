import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import GlobalStyles from "./global";
import HomePage from "./pages/HomePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
  <React.StrictMode>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </React.StrictMode>
  </Router>
);
