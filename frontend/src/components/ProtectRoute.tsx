import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { AuthContext } from "./AuthContext.tsx";

const ProtectRoute = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    if(!isAuthenticated){
        return <Navigate to="/login" state={{ redirectPath: location.pathname }} />
    }

    return <Outlet />
}

export default ProtectRoute;