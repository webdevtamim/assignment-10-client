import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        if (password.length < 6) {
            toast("The password is less than 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast("The password don't have a capital letter");
            return;
        }
        else if (!/[#?!@$%^&*-]/.test(password)) {
            toast("The password don't have a special character");
            return;
        }
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        loading,
        createUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    );
};

export default AuthProvider;