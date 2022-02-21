import { AppRoutes } from "../routes/AppRoutes"
import { Nav } from "../components/partials/Nav";

export const MainLayout=()=>{
    return(
        <main>
            <Nav/>
            <AppRoutes/>
        </main>
    );
}