import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../../common/navbar';
import Home from '../../pages/home';
import Dashboard from '../../pages/dashboard';

import Products from '../../pages/products';
import { FeaturedProducts } from '../../pages/products/featuredProducts';
import { NewProducts } from '../../pages/products/newProducts';

import Users from '../../pages/users';
import UserDetails from '../../pages/users/userDetails';
import Admin from '../../pages/users/admin';

import Loading from '../../components/loading';
import NoMatch from '../../components/noMatch';
import Profile from '../../auth/profile';

import { AuthProvider } from '../../auth';
import Login from '../../auth/login';
import RequireAuth from '../../auth/security';

const LazyAbout = lazy(() => import('../../pages/about'))

export const Router = () => {
    return (
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route 
                    path="about" 
                    element={
                        <React.Suspense fallback={<Loading/>}>
                            <LazyAbout />
                        </React.Suspense>
                    }
                />
                <Route path="products" element={<Products />}>
                    <Route index element={<FeaturedProducts />} />
                    <Route path="featured" element={<FeaturedProducts />} />
                    <Route path="new" element={<NewProducts />} />
                </Route>
                <Route path="users" element={<Users />} >
                    <Route index element={<UserDetails />} />
                    <Route path=":userId" element={<UserDetails />} />
                    <Route path="admin" element={<Admin />} />
                </Route>
                <Route path="profile"
                    element={
                        <RequireAuth>
                            <Profile />
                        </RequireAuth>
                    } 
                />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </AuthProvider>
    );
};