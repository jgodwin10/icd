import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// IMPORTED PAGES
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Academics from "./Pages/Academics.jsx";
import Programs from "./Pages/Programs.jsx";
import News from "./Pages/News.jsx";
import Partnership from "./Pages/Partnership.jsx";
import Partner from "./Pages/Partner.jsx";
import Events from "./Pages/Events.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/academics",
        element: <Academics />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/partnership",
        element: <Partnership />,
      },
      {
        path: "/partner",
        element: <Partner />,
      },
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
