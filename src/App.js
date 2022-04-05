import './App.css'

import Header from './components/global/header/Header'
import Footer from './components/global/Footer'

/* External Imports */

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WebsitesRoutes from './routes/WebsiteRoutes'

function App() {
    return (
        <div className="App">
            {/* toast */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            {/* header / nav */}
            <Header />

            {/* routes */}
            <WebsitesRoutes />

            {/* footer */}
            <Footer />
        </div>
    )
}

export default App
