import React from 'react'
import SignupCard from '../components/auth-pages/SignupCard'

function Signup() {
    return (
        <main style={{ top: '5rem', minHeight: '100vh' }}>
            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>

            <div className="relative w-full flex justify-center align-items-center">
                <SignupCard />
            </div>
            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>
        </main>
    )
}

export default Signup
