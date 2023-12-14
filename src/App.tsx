import { Route, Routes } from "react-router-dom";
import { routes } from "./pages/routes";
import ScrollToHashElement from "./utils/hasnavigation";

function App() {
  return (
    <div>
      <ScrollToHashElement />
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path} element={<route.component />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
