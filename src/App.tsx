import React from "react";
import HomePage from "./pages/HomePage";
import { routes } from "./pages/routes";
import { Route, Routes } from "react-router-dom";

function App() {
  return <div>
    <Routes>
      {
        routes.map((route) => {
          return <Route path={route.path} element={<route.component />} />;
        })
      }
    </Routes>
  </div>;
}

export default App;
