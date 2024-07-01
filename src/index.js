import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";
import 'bootstrap/dist/css/bootstrap.css'
import "./assets/css/template.css";
// pages for this kit
import Index from "./views/SplashPage.js";
import LoginPage from "./views/LoginPage.js";
import HomePage from "./views/HomePage.js";
import ProfilePage from "./views/ProfilePage.js";
import VotePage from "./views/VotePage.js"


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/vote-page" element={<VotePage />} />

      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);