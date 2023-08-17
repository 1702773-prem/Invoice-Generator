import React, { useContext } from 'react'
import { myContext } from '../App'

import { BrowserRouter, Link, Route, Routes, useNavigate} from 'react-router-dom'
import SignIN from './SignIN'
import InvoiceGuide from './InvoiceGuide'
import Help from './Help'

import InvoiceForm from './InvoiceForm'
import SignUp from './SignUp'
import Term from './Term'


function Navbar() {

   

    const {login, setLogin}= useContext(myContext)

    function signOut(){
        setLogin(false)
        window.location.pathname='/'
        
    }

    return (

        <BrowserRouter>

            <div>
                <header className='bg-gray-600 text-white py-3'>
                    <div className='max-w-6xl mx-auto flex gap-10 items-center'>
                        <Link to='/'><p className='text-xl'>Invoice Generator</p></Link>
                        <ul className='flex gap-6 items-center'>
                            <Link to='/help'>
                                <li>
                                    Help
                                </li>
                            </Link>
                            <Link to='/invoiceGuide'>
                                <li>
                                    Invoice Guide
                                </li>
                            </Link>

                    
                            { ! login ?
                           <Link to='/signIn'>
                                <li>
                                    Sign In
                                </li>
                            </Link> :  <button onClick={signOut}>Sign Out</button> }

                          { !login &&  <Link to='/SignUp'>
                                <li>
                                    <div className='rounded-full bg-green-600 px-3 py-1 hover:bg-green-700 '>
                                        <button >Sign Up</button>
                                    </div>
                                </li>
                            </Link> }
                        </ul>
                    </div>
                </header>
            </div>

             <Routes>

              <Route path='/' element = {<InvoiceForm/>} ></Route>
              <Route path='/help' element = {<Help/>} ></Route>
              <Route path='/invoiceGuide' element = {<InvoiceGuide/>} ></Route>
              <Route path='/signIn' element = {<SignIN/>} ></Route> 
              <Route path='/SignUp' element = {<SignUp/>} ></Route>
              <Route path='/term' element = {<Term/>} ></Route>
           

           </Routes>

        </BrowserRouter>
    )
}

export default Navbar