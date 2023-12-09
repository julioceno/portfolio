import { BrowserRouter, Route, Routes } from "react-router-dom";
import { list } from "./MenuList";

function RoutesComponent() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {list.map((item, index) => (
          <Route
            path={item.path}
            element={item.element}
            key={`${index}-${item.path}`}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export { RoutesComponent };
