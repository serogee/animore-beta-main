import { Link } from "react-router-dom";
import React, { useState } from "react";

type RouteType = {
    route: string;
    name: string;
    activeIcon: string;
    inactiveIcon: string;
};

type RoutesType = {
    [key: string]: RouteType;
};

const NavRoutes: RoutesType = {
    Home: {
        route: "/",
        name: "Home",
        activeIcon: "mdi mdi-home",
        inactiveIcon: "mdi mdi-home-outline",
    },
    UserRoles: {
        route: "/user-roles",
        name: "User Roles",
        activeIcon: "mdi mdi-account-multiple",
        inactiveIcon: "mdi mdi-account-multiple-outline",
    },
    Schedule: {
        route: "/schedule",
        name: "Schedule",
        activeIcon: "mdi mdi-clipboard-text-clock",
        inactiveIcon: "mdi mdi-clipboard-text-clock-outline",
    },
    CampusMap: {
        route: "/map",
        name: "Map",
        activeIcon: "mdi mdi-map-search",
        inactiveIcon: "mdi mdi-map-search-outline",
    },
};

export { NavRoutes };
export type { RouteType };

function getNavRouteByRoute(value: string): RouteType | undefined {
    for (const key in NavRoutes) {
        if (NavRoutes.hasOwnProperty(key)) {
            const navRoute = NavRoutes[key];
            if (navRoute.route === value) {
                return navRoute;
            }
        }
    }
    return undefined;
}

const [NavBarActive, setNavBarActive] = useState(false);

type NavBarProps = {
    activeRoute: RouteType;
};

function NavBar({ activeRoute }: NavBarProps) {
    const navbar = React.createRef<HTMLElement>();

    const navItems = () => {
        return Object.values(NavRoutes).map((item) => (
            <li
                className={
                    activeRoute.route === item.route
                        ? "nav-item active"
                        : "nav-item"
                }
            >
                <Link to={item.route} className="nav-link btn">
                    <span
                        className={
                            activeRoute.route === item.route
                                ? item.activeIcon.concat(" link-icon")
                                : item.inactiveIcon.concat(" link-icon")
                        }
                    />
                    <span className="link-text">{item.name}</span>
                </Link>
            </li>
        ));
    };

    return (
        <nav ref={navbar} className={NavBarActive ? "navbar active" : "navbar"}>
            <section className="navbar-top">
                <span className="logo">
                    <span className="mdi mdi-clock-plus" id="logo-img" />
                    <span id="logo-text">Animore</span>
                </span>
                <div className="menu-btn-container">
                    <span
                        className="mdi mdi-menu btn"
                        id="menu-btn"
                        onClick={() => {
                            setNavBarActive(!NavBarActive);
                        }}
                    />
                </div>
            </section>
            <ul className="navbar-nav">{navItems()}</ul>
        </nav>
    );
}

export default NavBar;
