import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter,
    useNavigate,
    useLocation,
    Navigate,
  } from "react-router-dom";

// Pages
import {Home} from "../Home/Home"
import {Artesanos} from "../Artesanos/Artesanos"
import {Artesanias} from "../Artesanias/Artesanias"
import SignIn from "../pages/Sign In/SignIn"
import { Register } from "../pages/Register/Register";
import {Orders} from "../pages/Orders/Orders";

// Shared Components
import {MainNavBar} from "../SharedComponents/MainNavBar"

// AuthProvider
import {AuthProvider} from '../contexts/auth-context'
// AuthContext
import { useFirebaseAuth } from '../contexts/auth-context';

// TSX
interface Props {
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
                <Route path="/orders" element={
                    <PrivateRoute component={Orders} />
                    } />
            </Routes>
        </AuthProvider>
        </BrowserRouter>
    )

}

interface Props {
    component: React.ComponentType;
    // any other props that come into the component
}

const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const context = useFirebaseAuth();
    return context.isLogged ? <RouteComponent /> : <Navigate to="/signin" />;
  }