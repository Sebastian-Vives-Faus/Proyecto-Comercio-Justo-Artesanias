import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';

// MUI Icons
import {ShoppingCart} from '@mui/icons-material';

// AuthContext
import { useFirebaseAuth } from '../contexts/auth-context';
// Firebase
import firebase from '../config/firebase-config';

export const MainNavBar = () => {
    // navigate hook
    const navigate = useNavigate();

    // Sign Out of Firebase
    const signOut = async () => {
        try {
            if (firebase) {
                await firebase.auth().signOut();
                alert('Signed out succesfully!');
            }
        } catch (error) {
            alert(error);
        }
        navigate('/');
        window.location.reload();
    };

    const context = useFirebaseAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }} >
                <Toolbar >
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bolder' }}>
                        LOGO TEMPORAL {context.isLogged ? "Welcome "+context.current_user.displayName : "Not Authenticated"}
                    </Typography>
                    <Toolbar>
                        <Link to="/">
                        <Button color='warning' variant='contained'>Home</Button>
                        </Link>
                        &nbsp;
                        <Link to="/artisans">
                        <Button color='warning' variant='contained'>Artisans</Button>
                        </Link>
                        &nbsp;
                        <Link to="/folkart">
                        <Button color='warning' variant='contained'>Folk Art</Button>
                        </Link>&nbsp;

                        {context.isLogged ? 
                            (
                            <>
                            <Button color='warning' variant='contained' ><ShoppingCart /></Button>&nbsp;
                            <Button color='warning' variant='contained' onClick={() => signOut()}>Sign Out</Button>
                            </>
                            )
                             : 
                            ( <Link to="/signin">
                                <Button color='warning' variant='contained'>Log In</Button>
                              </Link>)
                        }
                       

                            

                    </Toolbar>
 
                </Toolbar>
            </AppBar>
        </Box>
    )
}