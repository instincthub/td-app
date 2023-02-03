import React from "react";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
// import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getCookie } from "./components/static/assets/js/help_func";
import App from "./pages/Home";
import RegDetails from "./pages/RegDetails";
import Register from "./pages/Register";
import Register2 from "./pages/Register";
import CheckMail from "./pages/CheckMail";
import InvalidToken from "./pages/InvalidToken";
import QuizInstruction from "./pages/QuizIntruction";
import QuizTest from "./pages/QuizTest";
import QuizResults from "./pages/QuizResults";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import Error404 from "./pages/Status/Error404";

// Sentry
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

// Community Support
import CommunitySignup from "./pages/community/CommunitySignup";
import CommunitySignupDetails from "./pages/community/CommunitySignupDetails";
import CommunitySignupSuccess from "./pages/community/CommunitySignupSuccess";
import CampusLeadSignup from "./pages/community/CampusLeadSignup";

// eslint-disable-next-line
import RegTracker from "./pages/RegTracker";
import { BasicTable } from "./pages/BasicTable";

// Time since
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

function Index() {
  useEffect(() => {
    console.log("rendered");
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="register" element={<Register2 />} />
        {/* <Route path="register2" element={<Register2 />} /> */}
        <Route path="register/verify" element={<CheckMail />} />
        <Route path="register/details" element={<RegDetails />} />
        <Route path="register/invalid-token" element={<InvalidToken />} />
        <Route path="quiz" element={<QuizInstruction />} />
        <Route path="quiz/quiztest" element={<QuizTest />} />
        <Route path="quiz/quiztest/results" element={<QuizResults />} />
        <Route path="login" element={<Login />} />
        <Route path="login/success" element={<LoginSuccess />} />

        {/* Community Support */}
        <Route path="/community/signup/" element={<CommunitySignup />} />
        <Route
          path="/community/signup/details/"
          element={<CommunitySignupDetails />}
        />
        <Route
          path="/community/signup/details/success"
          element={<CommunitySignupSuccess />}
        />
        <Route
          path="/community/signup/campus-lead"
          element={<CampusLeadSignup />}
        />

        {/* Errors */}
        <Route path="*" element={<Error404 />} />

        {/* <Route path="reg_tracker" element={<RegTracker />} /> */}
        <Route path="reg_tracker" element={<BasicTable />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById("root");
Sentry.init({
  dsn: "https://fdb625f6906b4fbb8d4b113028c82a91@o4504492120408064.ingest.sentry.io/4504531530153984",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,
  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  integrations: [new Sentry.Replay()],
});
const root = createRoot(container);

/* 
  Send Sentry user meta
*/
if (getCookie('access')) {
  Sentry.setUser({ username: getCookie('username'), id:  getCookie('u_id')});
  
}
root.render(<Index />);
