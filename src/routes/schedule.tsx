import { NavRoutes } from "../components/NavBar";

const NavRoute = NavRoutes.Schedule;

function Schedule() {
    return (
        <>
            <h1>{NavRoute.name}</h1>
        </>
    );
}

export default Schedule;
