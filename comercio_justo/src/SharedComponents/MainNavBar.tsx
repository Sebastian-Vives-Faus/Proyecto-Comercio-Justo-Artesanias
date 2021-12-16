import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const MainNavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }} >
                <Toolbar >
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bolder' }}>
                        LOGO TEMPORAL
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
                        </Link>
                    </Toolbar>
 
                </Toolbar>
            </AppBar>
        </Box>
    )
}