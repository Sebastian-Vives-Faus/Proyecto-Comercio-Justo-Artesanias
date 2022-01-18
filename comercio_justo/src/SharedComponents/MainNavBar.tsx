import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';

// MUI Icons
import {ShoppingCart} from '@mui/icons-material';

// AuthContext
import { useFirebaseAuth } from '../contexts/auth-context';
// Firebase
import firebase from '../config/firebase-config';

export const MainNavBar = () => {
    // Avatar Menu
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
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
                            <Tooltip title="My Profile">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar alt={context.current_user.displayName} src={context.current_user.photoURL} />
                                </IconButton>
                            </Tooltip>

                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                <Link to="/orders">
                                <MenuItem>
                                    My Orders
                                </MenuItem> </Link>
                                <MenuItem onClick={() => signOut()}>
                                    Sign Out
                                </MenuItem>   
                                </Menu>


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