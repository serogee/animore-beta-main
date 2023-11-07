import { NavRoutes } from "../components/NavBar";

const NavRoute = NavRoutes.UserRoles;

function UserRoles() {
    return (
        <>
            <h1>{NavRoute.name}</h1>
        </>
    );
}

export default UserRoles;
