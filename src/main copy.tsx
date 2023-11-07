import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavRoutes } from "./components/NavBar";
import Home from "./routes/home";
import UserRoles from "./routes/user-roles";
import Schedule from "./routes/schedule";
import CampusMap from "./routes/map";

import NavBar from "./components/NavBar";

// const router = createBrowserRouter([
//     {
//         path: NavRoutes.Home.route,
//         element: <Home />,
//     },
//     {
//         path: NavRoutes.UserRoles.route,
//         element: <UserRoles />,
//     },
//     {
//         path: NavRoutes.Schedule.route,
//         element: <Schedule />,
//     },
//     {
//         path: NavRoutes.CampusMap.route.replace("/", ""),
//         element: <CampusMap />,
//     },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/* <RouterProvider router={router} /> */}

        <Router>
            <NavBar />
        </Router>
    </React.StrictMode>
);
