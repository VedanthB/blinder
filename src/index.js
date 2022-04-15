import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { makeServer } from './server'

import { BrowserRouter as Router } from 'react-router-dom'

import { ProductProvider } from './context/providers/ProductProvider'
import { FiltersProvider } from './context/providers/FilterProvider'
import { AuthProvider } from './context/providers/AuthProvider'
import { CartProvider } from './context/providers/CartProvider'
import { WishlistProvider } from './context/providers/WishlistProvider'

// Call make Server
makeServer()

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <ProductProvider>
                    <CartProvider>
                        <WishlistProvider>
                            <FiltersProvider>
                                <App />
                            </FiltersProvider>
                        </WishlistProvider>
                    </CartProvider>
                </ProductProvider>
            </AuthProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
