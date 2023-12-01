import { Route, Routes } from "react-router-dom";
import { routes } from "./pages/routes";

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
