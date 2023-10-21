import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center pt-20"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/register'}></Navigate>;
};

export default PrivateRoute;