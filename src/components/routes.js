import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./common/ErrorBoundry";
import Header from "./layout/header";

import Home from "./pages/home";
import Todo from "./pages/todo";

const RouteComponent = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* index prop consider path to "/" */}
          <Route index element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/todo/:id" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
export default RouteComponent;
