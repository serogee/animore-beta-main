import { NavRoutes } from "../components/NavBar";

const NavRoute = NavRoutes.Home;

function Home() {
    return (
        <>
            <h1>{NavRoute.name}</h1>
        </>
    );
}

export default Home;
