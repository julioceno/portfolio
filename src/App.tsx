import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<LandingPage />} />
        <Route path="/portfolio/test" element={<div>aaa</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
