import { BrowserRouter, Route, Routes } from "react-router-dom";
import { list } from "./MenuList";

function RoutesComponent() {
  return (
    <BrowserRouter>
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
