import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { makeServer } from './server'

import { BrowserRouter as Router } from 'react-router-dom'

import { ProductProvider } from './context/providers/ProductProvider'
import { FiltersProvider } from './context/providers/FilterProvider'
import { AuthProvider } from './context/providers/AuthProvider'

// Call make Server
makeServer()

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <ProductProvider>
                    <FiltersProvider>
                        <App />
                    </FiltersProvider>
                </ProductProvider>
            </AuthProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
