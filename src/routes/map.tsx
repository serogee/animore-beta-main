import { NavRoutes } from "../components/NavBar";

const NavRoute = NavRoutes.CampusMap;

function CampusMap() {
    return (
        <>
            <h1>{NavRoute.name}</h1>
        </>
    );
}

export default CampusMap;
