import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/providers/AuthProvider'
import { useToast } from '../../hooks/useToast'
import { signupUser } from '../../utils/signupUser'

const initSignupState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
}

function SignupCard() {
    const [userData, setUserData] = useState(initSignupState)

    const { authDispatch } = useAuth()

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const { showToast } = useToast()

    return (
        <div
            style={{ margin: 'auto', backgroundColor: '#0000227c' }}
            className="h=96 w-96 p-10 shadow-2xl rounded-2xl"
        >
            <h3 className="text-2xl font-normal text-center text-white mb-20">
                Sign Up
            </h3>

            <div className="mb-5">
                <div className="input-container text-white">
                    <input
                        type="text"
                        id="firstName"
                        className="input-outlined input-outlined-cyan"
                        placeholder=" "
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleChange}
                    />
                    <label
                        style={{ backgroundColor: '#0000227c' }}
                        htmlFor="email"
                        className="input-label"
                    >
                        First Name *
                    </label>
                </div>
            </div>

            <div className="mb-5">
                <div className="input-container text-white">
                    <input
                        type="text"
                        id="lastName"
                        className="input-outlined input-outlined-cyan"
                        placeholder=" "
                        onChange={handleChange}
                        name="lastName"
                        value={userData.lastName}
                    />
                    <label
                        style={{ backgroundColor: '#0000227c' }}
                        htmlFor="lastName"
                        className="input-label"
                    >
                        Last Name *
                    </label>
                </div>
            </div>

            <div className="mb-5">
                <div className="input-container text-white">
                    <input
                        type="text"
                        id="email"
                        className="input-outlined input-outlined-cyan"
                        placeholder=" "
                        name="email"
                        onChange={handleChange}
                        value={userData.email}
                    />
                    <label
                        style={{ backgroundColor: '#0000227c' }}
                        htmlFor="email"
                        className="input-label"
                    >
                        Email *
                    </label>
                </div>
            </div>

            <div className="mb-5">
                <div className="input-container text-white">
                    <input
                        type="text"
                        id="password"
                        className="input-outlined input-outlined-cyan"
                        name="password"
                        placeholder=" "
                        onChange={handleChange}
                        value={userData.password}
                    />
                    <label
                        style={{ backgroundColor: '#0000227c' }}
                        htmlFor="password"
                        className="input-label "
                    >
                        Password *
                    </label>
                </div>
            </div>

            {/* <div className="mb-5">
                <div className="input-container text-white">
                    <input
                        type="text"
                        id="email"
                        className="input-outlined input-outlined-cyan"
                        autocomplete="off"
                        placeholder=" "
                    />
                    <label
                        style={{ backgroundColor: '#0000227c' }}
                        htmlFor="email"
                        className="input-label "
                    >
                        Confirm Password *
                    </label>
                </div>
            </div> */}

            <div className="flex justify-between mb-10">
                <Link
                    to="/login"
                    className="btn btn-link-cyan text-white"
                    style={{ padding: 0 }}
                >
                    Login ?
                </Link>
            </div>

            <button
                style={{ background: 'transparent' }}
                className="btn btn-outline-cyan justify-center w-full text-white mb-5"
                onClick={(e) => {
                    e.preventDefault()

                    setUserData({
                        firstName: 'John',
                        lastName: 'Doe',
                        email: 'johndoe@gmail.com',
                        password: '123456',
                    })

                    signupUser(
                        {
                            firstName: 'John',
                            lastName: 'Doe',
                            email: 'johndoe@gmail.com',
                            password: '123456',
                        },
                        authDispatch,
                        navigate,
                        showToast
                    )

                    setUserData(initSignupState)
                }}
            >
                Signup With Test Credentials
            </button>

            <button
                onClick={() =>
                    signupUser(userData, authDispatch, navigate, showToast)
                }
                className="btn btn-solid-cyan justify-center w-full text-white"
            >
                Sign Up
            </button>
        </div>
    )
}

export default SignupCard
