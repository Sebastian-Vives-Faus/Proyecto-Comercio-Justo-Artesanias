import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

// Pages
import {Home} from "../Home/Home"
import {Artesanos} from "../Artesanos/Artesanos"
import {Artesanias} from "../Artesanias/Artesanias"
import SignIn from "../pages/Sign In/SignIn"
import { Register } from "../pages/Register/Register";

// Shared Components
import {MainNavBar} from "../SharedComponents/MainNavBar"

// AuthProvider
import {AuthProvider} from '../contexts/auth-context'

// TSX
interface Props {
    user: string
}

export const SiteIndex = () => {

    return (
        <BrowserRouter>
        <AuthProvider>
        <MainNavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/artisans" element={<Artesanos/>}/>
                <Route path="/folkart" element={<Artesanias/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </AuthProvider>
        </BrowserRouter>
    )

}