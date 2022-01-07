import React, { createContext, useState, useEffect } from "react";

// Firebase
import firebase from '../config/firebase-config';

const AuthContext = createContext({});

// Provider

const AuthProvider = (props) => {
    const [authState, setAuthState] = useState({
        isLogged: false,
        current_user: null
    });

    useEffect(() => {
        firebase.auth().onAuthStateChanged((userCred) => {
            if (userCred) {
                //console.log(userCred);
                setAuthState({
                    isLogged: true,
                    current_user: userCred
                });

                }
		});
    }, [])


    return <AuthContext.Provider value={[authState, setAuthState]} {...props}/>
};

// Enables using AuthContext in my components.
/*
Our hook useFirebaseAuth simply facilitates React.useContext to access the previously defined context. 
We explicitly check for undefined to catch possible misuses as early as possible.
*/

function useFirebaseAuth() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
      throw new Error(
        "useFirebaseAuth must be used within a FirebaseAuthProvider"
      );
    }
    return context[0];
  }

export { AuthProvider, useFirebaseAuth }