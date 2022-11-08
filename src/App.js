import "./App.css";
import Home from "./pages/Home";
import Javascript from "./pages/Javascript";
import HolaMundo from "./pages/HolaMundo";
import QueEsJavascript from "./pages/QueEsJavascript";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/js" element={<Javascript />} />
        <Route exact path="/que-es-js" element={<QueEsJavascript />} />
        <Route exact path="/hola-mundo" element={<HolaMundo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
