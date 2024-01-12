import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const auth = getAuth();


const AuthDetails = () => {

    const navigate = useNavigate();
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const uid = user.uid;
                console.log(uid)
                setAuthUser(user)

            } else {
                // User is signed out
                setAuthUser(null)
            }
        })
        return () => {
            listen()
        }
    }, [])

    const userSignout = () => {
        signOut(auth).then(()=> {
            console.log("sign out successfully")
        }).catch(error => console.log(error));
        navigate("/signin");
    }
 
    return (
        <div>{authUser ? <><p>{`Signed in as ${authUser.email}`}</p><button onClick={userSignout}>Sign Out</button></> : <p>Signed Out</p>}</div>
    )
}

export default AuthDetails