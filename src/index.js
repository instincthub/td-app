import React from "react";
import { useEffect } from "react";
import {createRoot} from 'react-dom/client';
// import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/Home";
import RegDetails from "./pages/RegDetails";
import Register from './pages/Register'
import CheckMail from "./pages/CheckMail"
import InvalidToken from "./pages/InvalidToken"
import QuizInstruction from "./pages/QuizIntruction";

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
              <Route path="register" element={<Register />} />
              <Route path="register/verify" element={<CheckMail />} />
              <Route path="register/details" element={<RegDetails />} />
              <Route path="register/invalid-token" element={<InvalidToken />} />
              <Route path="quiz" element={<QuizInstruction />} />
          </Routes>
        </BrowserRouter>
      );
  }
  
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<Index />);
