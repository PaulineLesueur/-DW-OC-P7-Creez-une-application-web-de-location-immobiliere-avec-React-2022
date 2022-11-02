import React from 'react';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Rental from '../pages/Rental';
import About from '../pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/rental/:id" element={<Rental />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;