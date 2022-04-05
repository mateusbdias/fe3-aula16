import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Initial from "./pages/Initial";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
        <span>Todos os direitos reservados</span>
      </footer>
    </BrowserRouter>
  );
}
