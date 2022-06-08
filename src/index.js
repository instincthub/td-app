import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TDN from "./components/TDN";

// ReactDOM.render(<App />, document.getElementById("root"));
export default function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="signup" element={<TDN />} />
        </Routes>
      </BrowserRouter>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"));
