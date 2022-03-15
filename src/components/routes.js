import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Todo from "./pages/todo";

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* index prop consider path to "/" */}
        <Route index element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteComponent;
