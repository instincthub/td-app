import React from "react";
import { useEffect } from "react";
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TDN from "./components/TDN";


function App() {
    useEffect(() => {
      console.log('rendered');
    });
  
    return (
        <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path="signup" element={<TDN />} />
          </Routes>
        </BrowserRouter>
      );
  }
  
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<App />);
