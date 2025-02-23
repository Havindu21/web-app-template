import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, CssBaseline } from '@mui/material';

const MainLayout = () => {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Box mb={'60px'} />  {/*Give Navbar Height*/}
            <Outlet />
            <Box height={'60vh'} />
            <Footer />
        </>
    );
};

export default MainLayout;