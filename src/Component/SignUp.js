import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../App'
import { auth, myDatabase, provider } from '../Firebase.js'
import { signInWithPopup } from 'firebase/auth'
import { useFormik } from 'formik'
import { SignUpSchema } from '../FormValidationSchema.js'

function SignUp() {

    const navigate = useNavigate()
    const { login, setLogin } = useContext(myContext)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },

        onSubmit: function (values) {
    
            myDatabase.collection("userCredentials").add({
                name: values.name,
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword

            })
            setLogin(true)

            navigate("/")
        },

        validationSchema: SignUpSchema
    })



    function pleaseLogin() {

        signInWithPopup(auth, provider)
            .then(function () {

                const username = auth.currentUser.displayName
                const email = auth.currentUser.email

                setLogin(true)

                navigate("/")

            }).catch(function (error) {
                console.log(error)
            })

    }

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>

                    <form action="">
                        <div className='mt-2 relative'>
                            <input
                                type="text"
                                value={formik.values.name}
                                name="name"
                                placeholder="Full Name" required className="block border border-grey-light w-full p-3 rounded mb-4" onChange={formik.handleChange} />
                            <div className='absolute top-8'>
                                {formik.errors.name && formik.touched.name ? <span className='text-red-700'>{formik.errors.name}</span> : null}
                            </div>
                        </div>

                        <div className='mt-2 relative'>
                            <input
                                type="email"
                                value={formik.values.email}
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" required onChange={formik.handleChange} />
                            <div className='absolute top-8'>
                                {formik.errors.email && formik.touched.email ? <span className='text-red-700'>{formik.errors.email}</span> : null}
                            </div>
                        </div>
                        <div className='mt-2 relative'>
                            <input
                                type="password"
                                value={formik.values.password}
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" required onChange={formik.handleChange} />
                            <div className='absolute top-8'>
                                {formik.errors.password && formik.touched.password ? <span className='text-red-700'>{formik.errors.password}</span> : null}
                            </div>

                        </div>
                        <div className='mt-2 relative'>
                            <input
                                type="password"
                                value={formik.values.confirmPassword}
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirmPassword"
                                placeholder="Confirm Password" required onChange={formik.handleChange} />
                            <div className='absolute top-8'>
                                {formik.errors.confirmPassword && formik.touched.confirmPassword ? <span className='text-red-700'>{formik.errors.confirmPassword}</span> : null}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                            onClick={formik.handleSubmit}  >Create Account</button>
                    </form>



                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the {' '}
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="/term">
                            Terms of Service {' '}
                        </a> and {' '}
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="/term">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? {' '}
                    <a className="no-underline border-b border-blue text-blue" href="../signIn/">
                        Sign in
                    </a>.
                </div>

                <div>
                    <div
                        className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p
                            className="mx-4 mb-0 text-center font-semibold dark:text-white">
                            Or
                        </p>
                    </div>
                    <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" onClick={pleaseLogin}>
                        <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Sign in with Google
                    </button>
                </div>

            </div>

            <form action="">
                <input type="text" required className="block border border-grey-light w-full p-3 rounded mb-4" />
                <button type='submit'>sub</button>
            </form>



        </div>
    )
}

export default SignUp