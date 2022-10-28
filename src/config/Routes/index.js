import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/home';
import Dashboard from '../../pages/dashboard';
import About from '../../pages/about';

export const Router = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </React.Fragment>
    );
};