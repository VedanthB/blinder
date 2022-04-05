import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Mockman from 'mockman-js'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'
import PrivateRoutes from './PrivateRoutes'
import Cart from '../pages/Cart'
import Wishlist from '../pages/Wishlist'

function WebsitesRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mockman" element={<Mockman />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<PrivateRoutes />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
            </Route>
        </Routes>
    )
}

export default WebsitesRoutes
