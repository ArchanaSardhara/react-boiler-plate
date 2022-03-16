import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/header";

import Home from "./pages/home";
import Todo from "./pages/todo";
import AddTodo from "./pages/todo/todoCard";

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* index prop consider path to "/" */}
        <Route index element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteComponent;
