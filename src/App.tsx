// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/Home.tsx" element={<Home />} />
          <Route path="pages/About.tsx" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
