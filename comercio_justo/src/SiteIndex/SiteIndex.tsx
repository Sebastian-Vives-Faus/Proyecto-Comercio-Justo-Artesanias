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

// Shared Components
import {MainNavBar} from "../SharedComponents/MainNavBar"


// TSX
interface Props {
    user: string
}

export const SiteIndex: React.FC<Props> = () => {

    return (
        <BrowserRouter>
        <MainNavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/artisans" element={<Artesanos/>}/>
                <Route path="/folkart" element={<Artesanias/>}/>
            </Routes>
        </BrowserRouter>
    )

}