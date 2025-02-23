import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <AppBar sx={{
            position: 'fixed',
            height: '60px',
            backgroundColor: "#000A21"
        }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>

                {[
                    { label: "Home", path: "/home" },
                    { label: "About", path: "/about" },
                    { label: "Contact", path: "/contact" },
                    { label: "Login", path: "/login" },
                    { label: "Signup", path: "/signup" }
                ].map(({ label, path }) => (
                    <Button
                        key={path}
                        component={Link}
                        to={path}
                        sx={{
                            color: location.pathname === path ? "#FFD700" : "inherit", // Highlight active button
                            fontWeight: location.pathname === path ? "bold" : "normal",
                            backgroundColor: location.pathname === path ? "rgba(255, 215, 0, 0.2)" : "transparent",
                            borderRadius: 2,
                            "&:hover": {
                                backgroundColor: "rgba(255, 215, 0, 0.3)"
                            }
                        }}
                    >
                        {label}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
