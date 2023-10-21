import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import Swal from 'sweetalert2'

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, displayName, photoURL) => {
        setLoading(true)
        if (password.length < 6) {
            Swal.fire({
                title: 'Oops!',
                text: 'The password is less than 6 characters',
                icon: 'warning',
                confirmButtonText: 'Try again'
            })
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                title: 'Oops!',
                text: "The password don't have a capital letter",
                icon: 'warning',
                confirmButtonText: 'Try again'
            })
            return;
        }
        else if (!/[#?!@$%^&*-]/.test(password)) {
            Swal.fire({
                title: 'Oops!',
                text: "The password don't have a special character",
                icon: 'warning',
                confirmButtonText: 'Try again'
            })
            return;
        }
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: displayName,
                    photoURL: photoURL,
                })
            })
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;