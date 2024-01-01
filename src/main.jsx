import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Router/Router";
import JobContextProvider from "./Context/JobLIstContext/JobContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobContextProvider>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </JobContextProvider>
  </React.StrictMode>
);
