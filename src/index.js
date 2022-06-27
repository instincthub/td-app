import React from "react";
import { useEffect } from "react";
import {createRoot} from 'react-dom/client';
// import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/Home";
import TDN from "./components/TDN";
import Register from './pages/Register'
import CheckMail from "./pages/CheckMail"

// Time since
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)


function Index() {
    useEffect(() => {
      console.log('rendered');
    });
  
    return (
        <BrowserRouter>
          <Routes>
              <Route index element={<App />} />
              <Route path="details" element={<TDN />} />
              <Route path="register" element={<Register />} />
              <Route path="register/check-email" element={<CheckMail />} />
          </Routes>
        </BrowserRouter>
      );
  }
  
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<Index />);
