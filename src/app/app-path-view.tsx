import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { TutorLoginPage } from "./screens/tutor-login.tsx"
import { LoginPage } from "./screens/index.tsx";
import { NotFound } from "./screens/404.tsx";

export function AppPathView() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/tutor-login" element={<TutorLoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
