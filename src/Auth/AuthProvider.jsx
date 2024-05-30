import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Components/Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";



export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic()
    const auth = getAuth(app)
    const [user, setUser] = useState(null)


    // user observer
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                console.log('user in the auth state ',currentUser)
                const userInfo = { email: currentUser?.email } 
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }

                })
            } else {
                setUser(null)
                console.log('no user available in auth state')
                localStorage.removeItem('access-token')
            }
        })
    }, [axiosPublic])

    // create a user using email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
        }).then(() => {
            console.log('profile Updated')
        }).catch((error) => {
            console.error('error while updating user profile', error.message)
        });
    }


    // sign in existing users
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // login user with google
    const signInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }


    // sign out user
    const logout = () => {
        return signOut(auth)
    }



    // these are the data to be passed
    const authData = {
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        updateUserProfile,
        logout
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;