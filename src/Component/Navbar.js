import React, { useContext, useState } from 'react'
import { myContext } from '../App'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import SignIN from './SignIN'
import InvoiceGuide from './InvoiceGuide'
import Help from './Help'
import InvoiceForm from './InvoiceForm'
import SignUp from './SignUp'
import Term from './Term'


function Navbar() {

    const context = useContext(myContext)
    const [show, setShow] = useState(false)

    const { login, setLogin } = useContext(myContext)

    function signOut() {
        setLogin(false)
        window.location.pathname = '/'

    }

    window.addEventListener('resize', function () {
        context.setwidth(this.window.innerWidth)

    })

    function showMenu() {
        setShow(!show)
    }

    return (

        <BrowserRouter>

            <div>
                {context.width > 639 ?
                    (<header className='bg-gray-600 text-white py-3 px-12'>
                        <div className='max-w-6xl mx-auto flex gap-10 items-center'>
                            <Link to='/Invoice-Generator'><p className='text-xl'>Invoice Generator</p></Link>
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


                                {!login ?
                                    <Link to='/signIn'>
                                        <li>
                                            Sign In
                                        </li>
                                    </Link> : <button onClick={signOut}>Sign Out</button>}

                                {!login && <Link to='/SignUp'>
                                    <li>
                                        <div className='rounded-full bg-green-600 px-3 py-1 hover:bg-green-700 '>
                                            <button >Sign Up</button>
                                        </div>
                                    </li>
                                </Link>}
                            </ul>
                        </div>
                    </header>
                    ) :


                    (
                        <header className='bg-gray-600 text-white py-2 px-8'>
                            <div className='text-sm flex justify-between'>
                                <Link to='/'><p className='text-lg'>Invoice Generator</p></Link>
                                <button onClick={showMenu}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 512 512"><title>ionicons-v5-j</title><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg></button>
                            </div>
                            <div className={`${show ? 'block' : 'hidden'
                                } mt-1 p-2 transition-all duration-1000`}>
                                <ul className=''>
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


                                    {!login ?
                                        <Link to='/signIn'>
                                            <li>
                                                Sign In
                                            </li>
                                        </Link> : <button onClick={signOut}>Sign Out</button>}

                                    {!login && <Link to='/SignUp'>
                                        <li>
                                            <div className='rounded-full bg-green-600 hover:bg-green-700 px-1 w-16 '>
                                                <button >Sign Up</button>
                                            </div>
                                        </li>
                                    </Link>}
                                </ul>
                            </div>

                        </header>
                    )

                }

            </div>

            <Routes>

                <Route path='/Invoice-Generator' element={<InvoiceForm />} ></Route>
                <Route path='/help' element={<Help />} ></Route>
                <Route path='/invoiceGuide' element={<InvoiceGuide />} ></Route>
                <Route path='/signIn' element={<SignIN />} ></Route>
                <Route path='/SignUp' element={<SignUp />} ></Route>
                <Route path='/term' element={<Term />} ></Route>

            </Routes>

        </BrowserRouter>
    )
}

export default Navbar