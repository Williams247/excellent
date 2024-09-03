import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/index.tsx";
import { LoginPage } from "./pages/login.tsx";

function View() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default View;
