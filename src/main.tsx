import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavRoutes } from "./components/NavBar";
import Home from "./routes/home";
import UserRoles from "./routes/user-roles";
import Schedule from "./routes/schedule";
import CampusMap from "./routes/map";

import NavBar from "./components/NavBar";

console.log(NavRoutes.Home.route);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <NavBar />
            <main>
                <Routes>
                    <Route path={NavRoutes.Home.route} element={<Home />} />
                    <Route
                        path={NavRoutes.UserRoles.route}
                        element={<UserRoles />}
                    />
                    <Route
                        path={NavRoutes.Schedule.route}
                        element={<Schedule />}
                    />
                    <Route
                        path={NavRoutes.CampusMap.route}
                        element={<CampusMap />}
                    />
                </Routes>
            </main>
        </BrowserRouter>
    </React.StrictMode>
);
