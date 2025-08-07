import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./index.css";
import { CardsProvider } from "./components/CardsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardsProvider>
      <BrowserRouter basename="/counter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </CardsProvider>
  </React.StrictMode>
);
