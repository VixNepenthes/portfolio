import React from 'react';
import { Fragment } from 'react';
import { publicRoutes } from '../../routes';
import { DefaultLayout } from '../Layout';
import Navbar from '../Layout/DefaultLayout/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, createContext } from 'react';

import { AnimatePresence } from 'framer-motion';
export const NavContext = createContext();

const AnimateRoutes = () => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(0);
    const value = { isActive, setIsActive };

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <NavContext.Provider value={value}>
                                    <Navbar></Navbar>
                                    <Layout>
                                        <Page />
                                    </Layout>
                                </NavContext.Provider>
                            }
                        />
                    );
                })}
            </Routes>
        </AnimatePresence>
    );
};

export default AnimateRoutes;
