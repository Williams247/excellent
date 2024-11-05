import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./screens/auth/login.tsx";
import { NotFound } from "./screens/404.tsx";
import { Lessons } from "./screens/lessons/index.tsx";
import { Quiz } from "./screens/quiz/index.tsx";
import { Modules } from "./screens/lessons/modules.tsx";

export function AppPathView() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
