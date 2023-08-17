import React, { useContext } from 'react'
import { myContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { auth, myDatabase, provider } from '../Firebase.js'
import { signInWithPopup } from 'firebase/auth'

import {  useFormik } from 'formik'
import { SignInSchema } from '../FormValidationSchema.js'


export default function Example() {

  const { login, setLogin } = useContext(myContext)

  const navigate = useNavigate()

  const formik = useFormik({

    initialValues:{
      email:"",
      password: ""
    },

    onSubmit: async function(values) {
  
      try {
       
        const usersRef = myDatabase.collection('userCredentials');
        const userSnapshot = await usersRef.where('email', '==', values.email).get();
  
        if (!userSnapshot.empty) {
          console.log(userSnapshot)
          const userDoc = userSnapshot.docs[0];
          console.log(userDoc)
          const userData = userDoc.data();
          console.log(userData)
  
          if (userData.password === values.password) {
            //setVerificationResult('Credentials are valid.');
            setLogin(true)
             navigate("/")
              
          } else {
            // setVerificationResult('Invalid password.');
            alert('Invalid password.')
          }
        } else {
          // setVerificationResult('User not found.');
          alert('User not found.')
        }
      } catch (error) {
        console.error('Error verifying credentials:', error);
        //setVerificationResult('Error verifying credentials.');
        alert('Error verifying credentials.')
      }
  
    },
   

    validationSchema: SignInSchema

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
    <>

      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action='/' >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={formik.handleChange} />
                 <div className='absolute top-8'>
                {formik.errors.email && formik.touched.email ? <span className='text-red-700'>{formik.errors.email}</span> :null }
                </div>

              </div>
             
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
          
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={formik.handleChange} />
                   <div className='absolute top-8'>
                {formik.errors.password && formik.touched.password ? <span className='text-red-700'>{formik.errors.password}</span> :null}
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={formik.handleSubmit}>
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="../signUp" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign Up
            </a>
          </p>
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

     

    </>
  )
}