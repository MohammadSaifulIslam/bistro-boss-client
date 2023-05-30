import axios from "axios";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase_config";



export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    const userProfileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unsubcriber = () => {
            onAuthStateChanged(auth, (currentUser) => {
                setLoading(false)
                setUser(currentUser)

                if (currentUser) {
                    axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(res => {
                        localStorage.setItem('access-token', res.data.token)
                    })
                }
                else{
                    localStorage.removeItem('access-token')
                }
            })
        }

        return () => {
            return unsubcriber();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        userProfileUpdate,
        googleSignin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;