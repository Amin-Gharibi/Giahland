import {useRoutes} from "react-router-dom";
import routes from "./routes.jsx";

function App() {
    const router = useRoutes(routes)
    return (
        <>
            {router}
        </>
    );
}

export default App
